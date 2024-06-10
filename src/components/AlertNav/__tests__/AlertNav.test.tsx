import React from 'react';
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import AlertNav from '../AlertNav';
import { getHighestPriorityAlert } from '../../../services';
import { IAlertNav } from '../types';

// Mock dependencies
jest.mock('@stomp/stompjs');
jest.mock('sockjs-client');
const mockNavigate = jest.fn();
jest.mock('../../../services', () => ({
  getHighestPriorityAlert: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('AlertNav Component', () => {
  const instanceId = '12345';
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('ID: AN.1 - Should render correctly with initial props', () => {
    render(
      <MemoryRouter>
        <AlertNav instanceId={instanceId} alertsExists={true} />
      </MemoryRouter>
    );

    expect(screen.getByText('INSTANCE:')).toBeInTheDocument();
    expect(screen.getByText(instanceId)).toBeInTheDocument();
  });

  test('ID: AN.2 - Should navigate to /alerts when button is clicked', () => {
    render(
      <MemoryRouter>
        <AlertNav instanceId={instanceId} alertsExists={true}/>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalledWith('/alerts');
  });

  test('ID: AN.3 - should fetch the highest priority alert and set icon color accordingly', async () => {
    (getHighestPriorityAlert as jest.Mock).mockResolvedValue({ highestPriorityAlert: 'high' });
  
    render(
      <MemoryRouter>
        <AlertNav instanceId={instanceId} alertsExists={true}/>
      </MemoryRouter>
    );
  
    await waitFor(() => {
      expect(screen.getByRole('button')).toHaveClass('alert-nav__container__icon-container--bounce');
      expect(screen.getByTestId('warning')).toHaveAttribute('fill', '#CC3232');
    });
  });

  test('ID: AN.3 - Should handle WebSocket connection and messages', async () => {
    (getHighestPriorityAlert as jest.Mock).mockResolvedValueOnce({ highestPriorityAlert: 'medium' });
    
    const mockClient = {
      activate: jest.fn(),
      deactivate: jest.fn(),
      subscribe: jest.fn((destination, callback) => {
        // Simulate receiving a message
        callback({ body: JSON.stringify({ highestPriorityAlert: 'low' }) });
      }),
      onConnect: null,
      onStompError: null,
    };

    (Client as jest.Mock).mockImplementation(() => mockClient);
    (SockJS as unknown as jest.Mock).mockImplementation(() => ({}))

    render(
      <MemoryRouter>
        <AlertNav instanceId={instanceId} alertsExists={true}/>
      </MemoryRouter>
    );

    // Verify WebSocket connection
    expect(mockClient.activate).toHaveBeenCalled();

    await waitFor(() => {
      // Verify initial alert fetch
      expect(screen.getByTestId('warning')).toHaveAttribute('fill', '#E99306');

      // Verify alert update via WebSocket
      expect(screen.getByTestId('warning')).toHaveAttribute('fill', '#E99306');
    });

    // Clean up WebSocket connection on unmount
    cleanup();
    expect(mockClient.deactivate).toHaveBeenCalled();
  });
  
});
