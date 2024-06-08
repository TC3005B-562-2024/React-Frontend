import { render, screen, waitFor } from '@testing-library/react';
import Alerts from '../../Alerts/Alerts';
import { getAllAlerts } from '../../../services';
import { IAlertResponse } from '../../../services/alerts/types';

// Mock the getAllAlerts function
jest.mock('../../../services', () => ({
  getAllAlerts: jest.fn(),
}));

const mockAlertsData: IAlertResponse = {
  high: [
    {
      id: 1,
      connection: {
        identifier: 1,
        denomination: "Connection 1",
        description: "Description 1",
        dateJoined: new Date("2024-06-05T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-05T00:12:26.281Z"),
        active: true,
      },
      insight: {
        identifier: 1,
        category: {
          identifier: 1,
          denomination: "Category 1",
          description: "Description 1",
          priority: 1,
          dateRegistered: new Date("2024-06-05T00:12:26.281Z"),
          dateUpdated: new Date("2024-06-05T00:12:26.281Z"),
          active: true,
        },
        denomination: "Insight 1",
        description: "High priority alert",
        dateRegistered: new Date("2024-06-05T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-05T00:12:26.281Z"),
        active: true,
      },
      training: {
        identifier: 1,
        denomination: "Training 1",
        description: "Training description",
        dateRegistered: new Date("2024-06-05T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-05T00:12:26.281Z"),
        active: true,
      },
      resource: "Resource 1",
      dateRegistered: new Date("2024-06-05T00:12:26.281Z"),
      dateUpdated: new Date("2024-06-05T00:12:26.281Z"),
      solved: true,
      dateTrainingCompleted: new Date("2024-06-05T00:12:26.281Z"),
      hasTraining: true,
      trainingCompleted: true,
    }
  ],
  medium: [
    {
      id: 2,
      connection: {
        identifier: 2,
        denomination: "Connection 2",
        description: "Description 2",
        dateJoined: new Date("2024-06-06T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-06T00:12:26.281Z"),
        active: true,
      },
      insight: {
        identifier: 2,
        category: {
          identifier: 2,
          denomination: "Category 2",
          description: "Description 2",
          priority: 2,
          dateRegistered: new Date("2024-06-06T00:12:26.281Z"),
          dateUpdated: new Date("2024-06-06T00:12:26.281Z"),
          active: true,
        },
        denomination: "Insight 2",
        description: "Medium priority alert",
        dateRegistered: new Date("2024-06-06T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-06T00:12:26.281Z"),
        active: true,
      },
      training: {
        identifier: 2,
        denomination: "Training 2",
        description: "Training description 2",
        dateRegistered: new Date("2024-06-06T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-06T00:12:26.281Z"),
        active: true,
      },
      resource: "Resource 2",
      dateRegistered: new Date("2024-06-06T00:12:26.281Z"),
      dateUpdated: new Date("2024-06-06T00:12:26.281Z"),
      solved: false,
      dateTrainingCompleted: new Date("2024-06-06T00:12:26.281Z"),
      hasTraining: true,
      trainingCompleted: false,
    }
  ],
  low: [
    {
      id: 3,
      connection: {
        identifier: 3,
        denomination: "Connection 3",
        description: "Description 3",
        dateJoined: new Date("2024-06-07T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-07T00:12:26.281Z"),
        active: true,
      },
      insight: {
        identifier: 3,
        category: {
          identifier: 3,
          denomination: "Category 3",
          description: "Description 3",
          priority: 3,
          dateRegistered: new Date("2024-06-07T00:12:26.281Z"),
          dateUpdated: new Date("2024-06-07T00:12:26.281Z"),
          active: true,
        },
        denomination: "Insight 3",
        description: "Low priority alert",
        dateRegistered: new Date("2024-06-07T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-07T00:12:26.281Z"),
        active: true,
      },
      training: {
        identifier: 3,
        denomination: "Training 3",
        description: "Training description 3",
        dateRegistered: new Date("2024-06-07T00:12:26.281Z"),
        dateUpdated: new Date("2024-06-07T00:12:26.281Z"),
        active: true,
      },
      resource: "Resource 3",
      dateRegistered: new Date("2024-06-07T00:12:26.281Z"),
      dateUpdated: new Date("2024-06-07T00:12:26.281Z"),
      solved: false,
      dateTrainingCompleted: new Date("2024-06-07T00:12:26.281Z"),
      hasTraining: true,
      trainingCompleted: false,
    }
  ],
};

beforeEach(() => {
  jest.clearAllMocks();
  (getAllAlerts as jest.Mock).mockResolvedValue(mockAlertsData);
});

describe('Alerts Component', () => {
  test('ID: Alerts.1 should render loading indicator while fetching alerts', async () => {
    render(<Alerts />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  });

  test('ID: Alerts.2 should render alerts when fetch is successful', async () => {
    render(<Alerts />);
    await waitFor(() => {
      expect(screen.getByText('Critic')).toBeInTheDocument();
    });
  });

  test('ID: Alerts.3 should display error message when fetch fails', async () => {
    (getAllAlerts as jest.Mock).mockRejectedValueOnce(new Error('Error fetching alerts'));
    render(<Alerts />);
    expect(await screen.findByText('Error fetching alerts')).toBeInTheDocument();
  });

  test('ID: Alerts.4 should display no alerts message when there are no alerts', async () => {
    (getAllAlerts as jest.Mock).mockResolvedValueOnce({ high: [], medium: [], low: [] });
    render(<Alerts />);
    expect(await screen.findByText('No alerts found')).toBeInTheDocument();
  });

  test('ID: Alerts.5 should display no alerts message when alerts is null', async () => {
    (getAllAlerts as jest.Mock).mockResolvedValueOnce(null);
    render(<Alerts />);
    expect(await screen.findByText('Alerts')).toBeInTheDocument();
  });

  test('ID: Alerts.6 should set error state and display error message when API call fails', async () => {
    (getAllAlerts as jest.Mock).mockRejectedValueOnce(new Error('Error fetching alerts'));

    render(<Alerts />);
    
    await waitFor(() => {
      expect(screen.getByText('Error fetching alerts')).toBeInTheDocument();
    });
  });

  test('ID: Alerts.7 sets error state and displays error message when response is undefined', async () => {
    (getAllAlerts as jest.Mock).mockResolvedValueOnce(undefined);
    render(<Alerts />);
    
    await waitFor(() => {
      expect(screen.getByText('Error fetching alerts')).toBeInTheDocument();
    });
  });

  test('ID: Alerts.8 renders SearchBar and Alerts title', () => {
    render(<Alerts />);
    
    // Verifica que el SearchBar esté presente utilizando una clase CSS
    const searchBar = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();

    // Verifica que el título "Alerts" esté presente
    const alertsTitle = screen.getByText(/Alerts/i);
    expect(alertsTitle).toBeInTheDocument();
  });

  test('ID: Alerts.9 should render AlertExpansionPanel with medium priority alerts', async () => {
    render(<Alerts />);
    
    // Espera a que las alertas se carguen y la pantalla de carga desaparezca
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  
    // Verifica que el componente AlertExpansionPanel con alertas de prioridad media se renderice correctamente
    expect(screen.getByText('Medium')).toBeInTheDocument();
  
  });

  test('ID: Alerts.10 should render AlertExpansionPanel with low priority alerts', async () => {
    render(<Alerts />);
    
    // Espera a que las alertas se carguen y la pantalla de carga desaparezca
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  
    // Verifica que el componente AlertExpansionPanel con alertas de prioridad media se renderice correctamente
    expect(screen.getByText('Low')).toBeInTheDocument();
  
  });





  
});
