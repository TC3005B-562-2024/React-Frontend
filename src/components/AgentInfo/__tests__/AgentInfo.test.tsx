import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AgentInfo from '../AgentInfo';
import { IAgentInfo } from '../types';

afterEach(() => {
  cleanup();
});

describe('AgentInfo Component', () => {
  const defaultProps: IAgentInfo = {
    id: '1',
    name: 'John Doe',
    sentiment: 'POSITIVE',
    queues: ['skill1', 'skill2'],
    status: 'Available',
    topPriorityAlert: 'MEDIUM',
  };

  test('should render with the correct agent name', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('should render with the correct sentiment', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Positive')).toBeInTheDocument();
  });

  test('should render the correct number of skills', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/skill/i).length).toBe(2);
  });

  test('should apply the correct status icon and color for Available status', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...defaultProps} />
      </MemoryRouter>
    );

    const statusIcon = screen.getByTestId('call_end');
    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveAttribute('fill', '#E7B416'); // Yellow
  });

  test('should apply the correct status icon and color for ONCALL status', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...{ ...defaultProps, status: 'ONCALL' }} />
      </MemoryRouter>
    );

    const statusIcon = screen.getByTestId('phone_in_talk');
    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveAttribute('fill', '#99C140'); // Green
  });

  test('should apply the correct status icon and color for DISCONNECTED status', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...{ ...defaultProps, status: 'DISCONNECTED' }} />
      </MemoryRouter>
    );

    const statusIcon = screen.getByTestId('clear_night');
    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveAttribute('fill', '#428ADE'); // Blue
  });

  test('should apply the correct alert icon and color for MEDIUM priority', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...defaultProps} />
      </MemoryRouter>
    );

    const alertIcon = screen.getByTestId('warning');
    expect(alertIcon).toBeInTheDocument();
    expect(alertIcon).toHaveAttribute('fill', '#E99306'); // Orange
  });

  test('should apply the correct alert icon and color for CRITICAL priority', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...{ ...defaultProps, topPriorityAlert: 'CRITICAL' }} />
      </MemoryRouter>
    );

    const alertIcon = screen.getByTestId('warning');
    expect(alertIcon).toBeInTheDocument();
    expect(alertIcon).toHaveAttribute('fill', '#CC3232'); // Red
  });

  test('should apply the correct alert icon and color for LOW priority', () => {
    render(
      <MemoryRouter>
        <AgentInfo {...{ ...defaultProps, topPriorityAlert: 'LOW' }} />
      </MemoryRouter>
    );

    const alertIcon = screen.getByTestId('warning');
    expect(alertIcon).toBeInTheDocument();
    expect(alertIcon).toHaveAttribute('fill', '#FFC300'); // Yellow
  });

  test('should navigate to the correct link on agent click', () => {
    const { container } = render(
      <MemoryRouter>
        <AgentInfo {...defaultProps} />
      </MemoryRouter>
    );

    fireEvent.click(container.querySelector('.agent-info__content')!);
    
  });
});
