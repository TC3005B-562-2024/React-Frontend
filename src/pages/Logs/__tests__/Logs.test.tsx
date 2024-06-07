import { render, screen, waitFor } from '@testing-library/react';
import Logs from '../Logs';
import { getLogs } from '../../../services/alerts/logsService';
import { IAlertResponse } from '../../../services/alerts/types';

jest.mock('../../../services/alerts/logsService', () => ({
  getLogs: jest.fn(),
}));

const mockLogsData: IAlertResponse = {
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
  medium: [],
  low: [],
};

beforeEach(() => {
  (getLogs as jest.Mock).mockResolvedValue(mockLogsData);
});

describe('Logs Page', () => {
    test('should render loading indicator while fetching logs', async () => {
        render(<Logs />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
        await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument());
      });
      
      test('should render category when fetch is successful', async () => {
        render(<Logs />);
        await screen.findByText(/Logs/i);
        const category = await screen.findByText(/CATEGORY 1 ACTION/i);
        expect(category).toBeInTheDocument();
      });
      
  test('should display error message when fetch fails', async () => {
    (getLogs as jest.Mock).mockRejectedValueOnce(new Error('Error fetching logs'));
    render(<Logs />);
    expect(await screen.findByText('Error fetching logs')).toBeInTheDocument();
  });

  test('should display no logs message when there are no logs', async () => {
    (getLogs as jest.Mock).mockResolvedValueOnce({ high: [], medium: [], low: [] });
    render(<Logs />);
    expect(await screen.findByText('No logs found')).toBeInTheDocument();
  });

  test('should display no logs message when logs is null', async () => {
    (getLogs as jest.Mock).mockResolvedValueOnce(null);
    render(<Logs />);
    expect(await screen.findByText('No logs found')).toBeInTheDocument();
  });
});