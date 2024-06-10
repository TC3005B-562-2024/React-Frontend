import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AgentList from '../AgentList';
import { IAgentList } from '../types';

afterEach(() => {
  cleanup();
});

describe('AgentList Component', () => {
  const agentsData: IAgentList = {
    agents: [
      {
        id: '1',
        name: 'John Doe',
        sentiment: 'POSITIVE',
        queues: ['skill1', 'skill2'],
        status: 'Available',
        topPriorityAlert: 'MEDIUM',
      },
      {
        id: '2',
        name: 'Jane Smith',
        sentiment: 'NEGATIVE',
        queues: ['skill3', 'skill4'],
        status: 'ONCALL',
        topPriorityAlert: 'CRITICAL',
      },
    ],
  };

  test('ID: AL.1 - Renders loading stateshould render the correct number of AgentInfo components', () => {
    render(
      <MemoryRouter>
        <AgentList {...agentsData} />
      </MemoryRouter>
    );

    // Expect the correct number of AgentInfo components
    expect(screen.getAllByText(/John Doe|Jane Smith/).length).toBe(2);
  });

  test('ID: AL.2 - Should render the grid layout correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <AgentList {...agentsData} />
      </MemoryRouter>
    );

    // Expect the grid to have the correct class
    const gridElement = container.querySelector('.grid');
    expect(gridElement).toBeInTheDocument();

    // Verify grid layout classes
    expect(gridElement).toHaveClass('grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4');
  });

  test('ID: AL.3 - Should render AgentInfo components with correct data', () => {
    render(
      <MemoryRouter>
        <AgentList {...agentsData} />
      </MemoryRouter>
    );

    // Check for specific agent data
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Positive')).toBeInTheDocument();
    expect(screen.getByText('Negative')).toBeInTheDocument();
  });
});
