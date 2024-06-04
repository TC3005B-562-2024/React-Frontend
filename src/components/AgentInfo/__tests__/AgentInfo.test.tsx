import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AgentInfo from '../AgentInfo';
import { MemoryRouter } from 'react-router-dom';

describe('Tests for AgentInfo Component', () => {
  const mockNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

  const defaultProps = {
    id: '1',
    name: 'John Doe',
    sentiment: 'POSITIVE' as 'POSITIVE',
    queues: ['Support', 'Sales'],
    status: 'ONCALL' as 'ONCALL',
    topPriorityAlert: 'CRITICAL' as 'CRITICAL',
  };

  const renderComponent = (props = {}) => {
    return render(
      <MemoryRouter>
        <AgentInfo {...defaultProps} {...props} />
      </MemoryRouter>
    );
  };

  test('should render the agent info correctly', () => {
    const { getByText, getByTestId } = renderComponent();

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Sentiment: Positive')).toBeInTheDocument();
    expect(getByText('Support')).toBeInTheDocument();
    expect(getByText('Sales')).toBeInTheDocument();

    const statusIcon = getByTestId('status-icon');
    expect(statusIcon).toHaveAttribute('data-icon-name', 'phone_in_talk');
    expect(statusIcon).toHaveAttribute('data-icon-color', 'green');

    const alertIcon = getByTestId('alert-icon');
    expect(alertIcon).toHaveAttribute('data-icon-name', 'warning');
    expect(alertIcon).toHaveAttribute('data-icon-color', 'red');
  });

  test('should navigate to agent details page on click', () => {
    const { getByText } = renderComponent();

    fireEvent.click(getByText('John Doe'));

    expect(mockNavigate).toHaveBeenCalledWith('/agents/1');
  });

  test('should render the sentiment correctly', () => {
    const { getByText, rerender } = renderComponent();

    expect(getByText('Sentiment: Positive')).toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <AgentInfo {...defaultProps} sentiment="NEGATIVE" />
      </MemoryRouter>
    );

    expect(getByText('Sentiment: Negative')).toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <AgentInfo {...defaultProps} sentiment="NEUTRAL" />
      </MemoryRouter>
    );

    expect(getByText('Sentiment: Neutral')).toBeInTheDocument();
  });

  test('should render the status icon correctly', () => {
    const { getByTestId, rerender } = renderComponent();

    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-name', 'phone_in_talk');
    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-color', 'green');

    rerender(
      <MemoryRouter>
        <AgentInfo {...defaultProps} status="Available" />
      </MemoryRouter>
    );

    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-name', 'call_end');
    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-color', 'yellow');

    rerender(
      <MemoryRouter>
        <AgentInfo {...defaultProps} status="DISCONNECTED" />
      </MemoryRouter>
    );

    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-name', 'clear_night');
    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-color', 'blue');
  });

  test('should render the top priority alert icon correctly', () => {
    const { getByTestId, rerender } = renderComponent();

    expect(getByTestId('alert-icon')).toHaveAttribute('data-icon-name', 'warning');
    expect(getByTestId('alert-icon')).toHaveAttribute('data-icon-color', 'red');

    rerender(
      <MemoryRouter>
        <AgentInfo {...defaultProps} topPriorityAlert="MEDIUM" />
      </MemoryRouter>
    );

    expect(getByTestId('alert-icon')).toHaveAttribute('data-icon-name', 'warning');
    expect(getByTestId('alert-icon')).toHaveAttribute('data-icon-color', 'orange');

    rerender(
      <MemoryRouter>
        <AgentInfo {...defaultProps} topPriorityAlert="LOW" />
      </MemoryRouter>
    );

    expect(getByTestId('alert-icon')).toHaveAttribute('data-icon-name', 'warning');
    expect(getByTestId('alert-icon')).toHaveAttribute('data-icon-color', 'yellowA');
  });

  test('should render sentiment when undefined', () => {
    const { queryByText } = renderComponent({ sentiment: undefined });

    expect(queryByText('Sentiment:')).not.toBeInTheDocument();
  });

  test('should render topPriorityAlert when undefined', () => {
    const { queryByTestId } = renderComponent({ topPriorityAlert: undefined });

    expect(queryByTestId('alert-icon')).not.toBeInTheDocument();
  });

  test('should render status icon for null status', () => {
    const { getByTestId } = renderComponent({ status: null });

    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-name', 'clear_night');
    expect(getByTestId('status-icon')).toHaveAttribute('data-icon-color', 'blue');
  });

  test('should render alert icon for null topPriorityAlert', () => {
    const { queryByTestId } = renderComponent({ topPriorityAlert: null });

    expect(queryByTestId('alert-icon')).not.toBeInTheDocument();
  });
});
