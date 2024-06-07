import { render, cleanup, screen, waitFor } from "@testing-library/react";
import Landing from "../Landing";
import userEvent from "@testing-library/user-event";
import { getAllAgents, getAllQueuesMin } from "../../../services";
import { IAgentCardDTO, Queue } from "../../../services/agents/types";
import { IQueueMin } from "../../../services/queue/types";


// Mock the getAllAgents and getAllQueuesMin functions
jest.mock('../../../services', () => ({
  getAllAgents: jest.fn(),
  getAllQueuesMin: jest.fn(),
}));

const mockAgents: IAgentCardDTO[] = [
  {
    id: '1',
    arn: 'arn:aws:connect:us:instace-id:agent-id-1',
    name: 'Agent Smith',
    status: 'Available',
    sentiment: 'POSITIVE',
    queues: [
      {"name": Queue.BasicQueue, "id" : "1"},
      {"name": Queue.PanoptimizeDoubts, "id" : "2"}
    ],
    topPriorityAlert: 'LOW'
  },
  {
    id: '2',
    arn: 'arn:aws:connect:us:instace-id:agent-id-2',
    name: 'Agent Johnson',
    status: 'DISCONNECTED',
    sentiment: null,
    queues: [{"name": Queue.CustomerService, "id" : "1"}],
    topPriorityAlert: null
  }
];

const mockQueues: IQueueMin[] = [
  {
    id: '1',
    name: Queue.BasicQueue,
  },
  {
    id: '2',
    name: Queue.PanoptimizeDoubts,
  },
  {
    id: '3',
    name: Queue.CustomerService,
  }
];

describe("Tests for Landing Page", () => {
  afterEach(() => {
    cleanup();
  });

  test("Should show loading spinner while fetching data", () => {
    // Mock the getAllAgents function to return a promise that never resolves
    (getAllAgents as jest.Mock).mockReturnValueOnce(new Promise(() => { }));
    (getAllQueuesMin as jest.Mock).mockReturnValueOnce(new Promise(() => { }));
    render(<Landing />);
    expect(screen.getAllByRole('progressbar')).toHaveLength(2);
  });

  test("Should render agents list after data fetch", async () => {
    // Mock the getAllAgents function to return the mockAgents data
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
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
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
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
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
    render(<Landing />);

    // Wait for the loading spinner to disappear and check if the error was logged
    await waitFor(() => expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument());
    expect(console.error).toHaveBeenCalledWith('Failed to fetch agents', expect.anything());
    consoleErrorSpy.mockRestore();
  });

  test("Should render the SearchBar component", async () => {
    // Mock the getAllAgents function to return the mockAgents data
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
    render(<Landing />);

    // Wait for the SearchBar component to render
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
  });

  test("Should filter agents based on search input", async () => {
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
    render(<Landing />);

    // Wait for the SearchBar and agents to render
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Agent Smith')).toBeInTheDocument(); // Ensure agents are loaded
    });

    // Simulate user typing in the search bar (using userEvent for better simulation)
    userEvent.type(screen.getByPlaceholderText('Search...'), 'Smith');

    // Verify that only the relevant agent is displayed (give time for the filtering to happen)
    await waitFor(() => {
      expect(screen.getByText('Agent Smith')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText('Agent Johnson')).not.toBeInTheDocument();
    });
  });

  test("Clicking the Filter button toggles the Filters component visibility", async () => {
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
    render(<Landing />);

    // Get the Filters component directly by its test ID
    const filtersComponent = await screen.findByTestId('filter-wrapper'); // Use findBy for async rendering

    // Click on the Filters button (which is now a <button>)
    userEvent.click(filtersComponent.querySelector('button')!);

    // Assert that the filter options are visible after the click
    await waitFor(() => {
      const filterOptions = screen.getAllByRole('checkbox');
      expect(filterOptions).toHaveLength(3);
    });

    // Click again to toggle off
    userEvent.click(filtersComponent.querySelector('button')!);

    // Assert that the filter options are no longer visible
    await waitFor(() => {
      const filterOptions = screen.queryAllByRole('checkbox');
      expect(filterOptions).toHaveLength(0);
    });
  });

  test("Should render the Filters component with all options", async () => {
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
    render(<Landing />);

    // Click the Filter button to make options visible (if they are hidden by default)
    const filtersComponent = await screen.findByTestId('filter-wrapper');
    userEvent.click(filtersComponent.querySelector('button')!);

    // Wait for the checkboxes to appear in the DOM
    await waitFor(() => {
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes).toHaveLength(3);
    }, { timeout: 5000 });  // Adjust the timeout as needed
  });


  test("Should apply filters correctly", async () => {
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
    render(<Landing />);

    // 1. Open the Filters Component
    const filtersComponent = await screen.findByTestId('filter-wrapper');
    userEvent.click(filtersComponent.querySelector('button')!);

    // 2. Wait for the Specific Checkbox to Be Visible
    const basicQueueCheckbox = await screen.findByLabelText(Queue.BasicQueue); // Wait for this specific checkbox

    // 3. Click the Checkbox and Verify Filtering
    userEvent.click(basicQueueCheckbox);

    await waitFor(() => {
      expect(screen.getByText("Agent Smith")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("Agent Johnson")).not.toBeInTheDocument();
    });

    // 4. Close the Filters
    userEvent.click(filtersComponent.querySelector('button')!);
  });

  test("Should clear filters when all are deselected", async () => {
    (getAllAgents as jest.Mock).mockResolvedValueOnce(mockAgents);
    (getAllQueuesMin as jest.Mock).mockResolvedValueOnce(mockQueues);
    render(<Landing />);

    // Open the filters
    const filtersComponent = await screen.findByTestId('filter-wrapper');
    userEvent.click(filtersComponent.querySelector('button')!);

    // Wait for the checkboxes to be rendered
    const checkboxes = await screen.findAllByRole('checkbox'); // Use findAllByRole

    // Uncheck the checkboxes
    checkboxes.forEach(checkbox => {
      userEvent.click(checkbox); // Uncheck each checkbox
    });

    // Wait for the agent list to update
    await waitFor(() => {
      expect(screen.getByText("Agent Smith")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Agent Johnson")).toBeInTheDocument();
    });
  });
});
