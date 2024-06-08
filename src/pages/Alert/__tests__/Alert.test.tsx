import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import Alert from '../Alert';
import { BrowserRouter } from 'react-router-dom';
import * as serviceModule from '../../../services';
import { IAlert } from '../../../services/alerts/types';
import { IAgentInformation } from '../../../services/agents/types';

afterEach(() => {
  jest.restoreAllMocks();
  cleanup();
});

beforeAll(() => {
  global.console = { ...console };
  console.error = jest.fn();
});

afterAll(() => {
  console.error = global.console.error;
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '123' }),
  useNavigate: jest.fn(),
}));

jest.mock('../../../services');

const mockAlert: IAlert = {
  id: 123,
  connection: {
    identifier: 1,
    denomination: 'Connection Denomination',
    description: 'Connection Description',
    dateJoined: new Date(),
    dateUpdated: new Date(),
    active: true,
  },
  insight: {
    identifier: 1,
    category: {
      identifier: 1,
      denomination: 'High Priority',
      description: 'High Priority Description',
      dateRegistered: new Date(),
      dateUpdated: new Date(),
      active: true,
      priority: 1,
    },
    denomination: 'High Risk',
    description: 'Risk of attrition',
    dateRegistered: new Date(),
    dateUpdated: new Date(),
    active: true,
    priority: 1,
  },
  resource: 'arn:aws:connect:us-east-1:123456789012:instance/instanceId/agent/agentId',
  dateRegistered: new Date(),
  dateUpdated: new Date(),
  solved: false,
  hasTraining: false,
  trainingCompleted: false,
};

const mockAgent: IAgentInformation = {
  id: 'agentId',
  arn: 'arn:aws:connect:us-east-1:123456789012:instance/instanceId/agent/agentId',
  information: {
    sectionTitle: 'General Information',
    sections: [{ sectionTitle: 'Name', sectionValue: 'Agent123', color: 'green' }],
  },
  metrics: {
    sectionTitle: 'Performance Metrics',
    sections: [{ sectionTitle: 'Calls Handled', sectionValue: '100', color: 'red' }],
  },
  alerts: { high: [], medium: [], low: [] },
  trainings: [],
  contactInformationDTO: [],
  agentInfo: undefined,
  queues: [],
};

describe('Alert Page Tests', () => {
  beforeEach(() => {
    (serviceModule.getAlertById as jest.Mock).mockResolvedValue(mockAlert);
    (serviceModule.getAgentById as jest.Mock).mockResolvedValue(mockAgent);
  });

  test('should render the Alert page correctly', async () => {
    render(
      <BrowserRouter>
        <Alert />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('High Priority')).toBeInTheDocument();
      expect(screen.getByText('Risk of attrition')).toBeInTheDocument();
    });
  });

  test('should handle data fetch error', async () => {
    (serviceModule.getAlertById as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <BrowserRouter>
        <Alert />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error fetching data:', new Error('Failed to fetch'));
    });
  });

  test('should call ignore and accept handlers', async () => {
    (serviceModule.postIgnoreAlert as jest.Mock).mockResolvedValue("Success");
    (serviceModule.postAcceptAlert as jest.Mock).mockResolvedValue("Success");

    const mockNavigate = jest.fn();
    (require('react-router-dom') as any).useNavigate = () => mockNavigate;

    render(
      <BrowserRouter>
        <Alert />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Ignore')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Ignore'));
    expect(serviceModule.postIgnoreAlert).toHaveBeenCalledWith(123);
    expect(mockNavigate).toHaveBeenCalledWith(-1);

    fireEvent.click(screen.getByText('Accept'));
    expect(serviceModule.postAcceptAlert).toHaveBeenCalledWith(123);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('should display the agent information', async () => {
    render(
      <BrowserRouter>
        <Alert />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Agent123')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
    });
  });
});
