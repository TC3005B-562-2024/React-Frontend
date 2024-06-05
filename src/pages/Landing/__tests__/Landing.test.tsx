import { render, cleanup, screen, waitFor } from "@testing-library/react";
import Landing from "../Landing";
import { getAllAgents } from "../../../services";
import { IAgentCardDTO, Queue } from "../../../services/agents/types";

// Mock the getAllAgents service
jest.mock('../../../services', () => ({
  getAllAgents: jest.fn(),
}));

const mockAgents: IAgentCardDTO[] = [
  {
    id: '1',
    arn: 'arn:aws:connect:us:instace-id:agent-id-1',
    name: 'Agent Smith',
    status: 'Available',
    sentiment: 'Positive',
    queues: [Queue.BasicQueue, Queue.PanoptimizeDoubts],
    topPriorityAlert: 'LOW'
  },
  {
    id: '2',
    arn: 'arn:aws:connect:us:instace-id:agent-id-2',
    name: 'Agent Johnson',
    status: 'DISCONNECTED',
    sentiment: null,
    queues: [Queue.CustomerService],
    topPriorityAlert: null
  }
];

describe("Tests for Landing Page", () => {
  afterEach(() => {
    cleanup();
  });

  test("Should show loading spinner while fetching data", () => {
    // Mock the getAllAgents function to return a promise that never resolves
    (getAllAgents as jest.Mock).mockReturnValueOnce(new Promise(() => { }));
    render(<Landing />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test("Should render agents list after data fetch", async () => {
    // Mock the getAllAgents function to return the mockAgents data
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    render(<Landing />);

    await waitFor(() => {
      expect(screen.getByText('Agent Smith')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Agent Johnson')).toBeInTheDocument();
    });
  });

  test("Should display an error when there is no agents returned", async () => {
    // Mock the getAllAgents function to return the mockAgents data
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    (getAllAgents as jest.Mock).mockResolvedValueOnce(null);
    render(<Landing />);

    // Wait for the loading spinner to disappear and check if the error was logged
    await waitFor(() => expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument());
    expect(console.error).toHaveBeenCalledWith('Failed to fetch agents');
    consoleErrorSpy.mockRestore();
  });

  test("Should handle fetch errors gracefully", async () => {
    // Mock the getAllAgents function to return a rejected promise and spy on console.error
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    (getAllAgents as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch agents'));
    render(<Landing />);

    // Wait for the loading spinner to disappear and check if the error was logged
    await waitFor(() => expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument());
    expect(console.error).toHaveBeenCalledWith('Failed to fetch agents', expect.anything());
    consoleErrorSpy.mockRestore();
  });

  test("Should render the SearchBar component", async () => {
    // Mock the getAllAgents function to return the mockAgents data
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    render(<Landing />);

    // Wait for the SearchBar component to render
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
  });

  test("Should render the Filters component with all options", async () => {
    // Mock the getAllAgents function to return the mockAgents data
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    render(<Landing />);

    // Wait for the Filters component to render
    await waitFor(() => {
      expect(screen.getByText('BasicQueue')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Panoptimize doubts')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Customer Service')).toBeInTheDocument();
    });
  });
});
