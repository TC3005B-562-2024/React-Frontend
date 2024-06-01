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

  test("Should render the Landing page", () => {
    render(<Landing />);
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Complaints')).toBeInTheDocument();
    expect(screen.getByText('Thefts')).toBeInTheDocument();
    expect(screen.getByText('Shoppings')).toBeInTheDocument();
  });

  test("Should show loading spinner while fetching data", () => {
    // Mock the getAllAgents function to return a promise that never resolves
    (getAllAgents as jest.Mock).mockReturnValueOnce(new Promise(() => { }));
    render(<Landing />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test("Should render agents list after data fetch", async () => {
    // Mock the getAllAgents function to return the mockAgents data
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    render(<Landing />);

    await screen.findByText('Agent Smith');
    expect(screen.getByText('Agent Johnson')).toBeInTheDocument();
  });

  test("Should handle fetch errors gracefully", async () => {
    // Mock the getAllAgents function to reject the promise
    (getAllAgents as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch agents'));
    render(<Landing />);

    await waitFor(() => expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument());
    // Assuming you handle errors by displaying some message or log, adjust the expectation accordingly
    expect(console.error).toHaveBeenCalledWith('Failed to fetch agents', expect.anything());
  });

  test("Should render the SearchBar component", () => {
    render(<Landing />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  test("Should render the Filters component with all options", () => {
    render(<Landing />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });
});
