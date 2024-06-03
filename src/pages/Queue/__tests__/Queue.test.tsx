import { render, screen, waitFor } from "@testing-library/react";
import { cleanup } from "@testing-library/react-hooks";
import { getQueueInfo } from "../../../services";
import { mockQueueInformation } from "../../../services/_mocks_/queueMock";
import Queue from "../Queue";

jest.mock('../../../services', () => ({
    getQueueInfo: jest.fn(() => Promise.resolve(mockQueueInformation[0])) // Devuelve una promesa resuelta por defecto
  }));
afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Tests for Queue page", () => {
    test("The Queue page should render correctly", async () => {
        (getQueueInfo as jest.Mock).mockResolvedValue(mockQueueInformation[0]);
        render(<Queue />);
        await waitFor(() => {
            expect(getQueueInfo).toHaveBeenCalledTimes(1);
        });
        expect(screen.getByTestId("queue-title")).toBeInTheDocument();
        expect(screen.getByTestId("queue-information-metrics-section")).toBeInTheDocument();
        expect(screen.getByTestId("alerts-section")).toBeInTheDocument();
        expect(screen.getByTestId("trainings-section")).toBeInTheDocument();
        expect(screen.getByTestId("agents-section")).toBeInTheDocument();
    });

    test("Displays loading state initially", () => {
        (getQueueInfo as jest.Mock).mockReturnValueOnce(new Promise(() => {}));
        render(<Queue />);
        expect(screen.getAllByRole("progressbar")).toHaveLength(4);
    });

    test("Displays error message when data fetch fails", async () => {
        (getQueueInfo as jest.Mock).mockImplementation(() => Promise.reject(new Error("Failed to fetch")));
        render(<Queue />);
        await waitFor(() => {
            expect(screen.getByText("Error fetching queue")).toBeInTheDocument();
        });
    });

    test("Correctly displays no alerts found when there are no alerts", async () => {
        const modifiedData = { ...mockQueueInformation[0], alerts: { high: [], medium: [], low: [] } };
        (getQueueInfo as jest.Mock).mockResolvedValue(modifiedData);
        render(<Queue />);
        await waitFor(() => {
            expect(screen.getByText("No alerts found")).toBeInTheDocument();
        });
    });

    test("Correctly displays agents information", async () => {
        (getQueueInfo as jest.Mock).mockResolvedValue(mockQueueInformation[0]);
        render(<Queue />);
        await waitFor(() => {
            expect(screen.getByText("Diego Jacobo")).toBeInTheDocument();
        });
    });

});
