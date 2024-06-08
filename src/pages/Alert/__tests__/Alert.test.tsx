import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from '../Alert';
import { getAlertById, postIgnoreAlert, postAcceptAlert } from '../../../services';
import { getQueueInfo } from '../../../services/queue/getQueueInfo';
import { getSkillById } from '../../../services/skills/getSkillById';
import { getAgentById } from '../../../services/agents/getAgentById';

// Mock react-router-dom hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

// Mock service functions
jest.mock('../../../services', () => ({
  getAlertById: jest.fn(),
  postIgnoreAlert: jest.fn(),
  postAcceptAlert: jest.fn(),
}));

jest.mock('../../../services/queue/getQueueInfo', () => ({
  getQueueInfo: jest.fn(),
}));

jest.mock('../../../services/skills/getSkillById', () => ({
  getSkillById: jest.fn(),
}));

jest.mock('../../../services/agents/getAgentById', () => ({
  getAgentById: jest.fn(),
}));

describe('Alert Component', () => {
  const mockNavigate = jest.fn();
  const mockParams = { id: '1' };

  beforeEach(() => {
    jest.resetAllMocks();
    (require('react-router-dom').useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (require('react-router-dom').useParams as jest.Mock).mockReturnValue(mockParams);
  });

  test('renders loading state initially', async () => {
    (getAlertById as jest.Mock).mockImplementation(() => new Promise(() => {}));

    await act(async () => {
      render(
        <Router>
          <Alert />
        </Router>
      );
    });

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('renders alert data', async () => {
    const mockAlertData = {
      id: 1,
      insight: {
        category: {
          denomination: 'High'
        },
        description: 'Test Alert Description'
      },
      resource: 'queue/12345'
    };

    (getAlertById as jest.Mock).mockResolvedValue(mockAlertData);
    (getQueueInfo as jest.Mock).mockResolvedValue({ information: { sections: [] } });

    await act(async () => {
      render(
        <Router>
          <Alert />
        </Router>
      );
    });

    await waitFor(() => expect(getAlertById).toHaveBeenCalledWith(1));

    expect(screen.getByText('Test Alert Description')).toBeInTheDocument();
  });

  test('handles ignore alert', async () => {
    const mockAlertData = {
      id: 1,
      insight: {
        category: {
          denomination: 'High'
        },
        description: 'Test Alert Description'
      },
      resource: 'queue/12345'
    };

    (getAlertById as jest.Mock).mockResolvedValue(mockAlertData);
    (getQueueInfo as jest.Mock).mockResolvedValue({ information: { sections: [] } });

    await act(async () => {
      render(
        <Router>
          <Alert />
        </Router>
      );
    });

    await waitFor(() => expect(getAlertById).toHaveBeenCalledWith(1));

    fireEvent.click(screen.getByText('Ignore'));

    await waitFor(() => expect(postIgnoreAlert).toHaveBeenCalledWith(1));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('handles accept alert', async () => {
    const mockAlertData = {
      id: 1,
      insight: {
        category: {
          denomination: 'High'
        },
        description: 'Test Alert Description'
      },
      resource: 'queue/12345'
    };

    (getAlertById as jest.Mock).mockResolvedValue(mockAlertData);
    (getQueueInfo as jest.Mock).mockResolvedValue({ information: { sections: [] } });

    await act(async () => {
      render(
        <Router>
          <Alert />
        </Router>
      );
    });

    await waitFor(() => expect(getAlertById).toHaveBeenCalledWith(1));

    fireEvent.click(screen.getByText('Accept'));

    await waitFor(() => expect(postAcceptAlert).toHaveBeenCalledWith(1));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('handles error state', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (getAlertById as jest.Mock).mockRejectedValue(new Error('Failed to fetch alert'));

    await act(async () => {
      render(
        <Router>
          <Alert />
        </Router>
      );
    });

    await waitFor(() => expect(getAlertById).toHaveBeenCalledWith(1));

    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
    consoleErrorSpy.mockRestore();
  });

  test('handles routing-profile resourceArn', async () => {
    const mockAlertData = {
      id: 1,
      insight: {
        category: {
          denomination: 'High'
        },
        description: 'Test Alert Description'
      },
      resource: 'routing-profile/12345'
    };
    const mockSkillData = {
      skillsInformationDTO: {
        sections: [
          { sectionTitle: 'Skill Section', sectionValue: 'Skill Value', color: 'black' }
        ]
      }
    };

    (getAlertById as jest.Mock).mockResolvedValue(mockAlertData);
    (getSkillById as jest.Mock).mockResolvedValue(mockSkillData);

    await act(async () => {
      render(
        <Router>
          <Alert />
        </Router>
      );
    });

    await waitFor(() => expect(getAlertById).toHaveBeenCalledWith(1));

    expect(screen.getByText('Test Alert Description')).toBeInTheDocument();
    expect(screen.getByText('Skill Section')).toBeInTheDocument();
  });

  test('handles agent resourceArn', async () => {
    const mockAlertData = {
      id: 1,
      insight: {
        category: {
          denomination: 'High'
        },
        description: 'Test Alert Description'
      },
      resource: 'agent/12345'
    };
    const mockAgentData = {
      information: {
        sections: [
          { sectionTitle: 'Agent Section', sectionValue: 'Agent Value', color: 'black' }
        ]
      }
    };

    (getAlertById as jest.Mock).mockResolvedValue(mockAlertData);
    (getAgentById as jest.Mock).mockResolvedValue(mockAgentData);

    await act(async () => {
      render(
        <Router>
          <Alert />
        </Router>
      );
    });

    await waitFor(() => expect(getAlertById).toHaveBeenCalledWith(1));

    expect(screen.getByText('Test Alert Description')).toBeInTheDocument();
    expect(screen.getByText('Agent Section')).toBeInTheDocument();
  });
});
