import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Queue from "../Queue";
import { cleanup } from "@testing-library/react-hooks";
import { mockQueueInformation } from "../../../services/_mocks_/queueMock";
import { getQueueInfo } from "../../../services";
import { shortId } from "../../../Utils/utils";

jest.mock('../../../services', () => ({
    getQueueInfo: jest.fn(() => Promise.resolve(mockQueueInformation[0])) // Devuelve una promesa resuelta por defecto
  }));
afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Tests for Queue page", () => {
    test("The Queue page should render correctly", async () => {
        const mockGetQueueInfo = jest.fn().mockResolvedValue(mockQueueInformation[0]);
        render(<Queue />);
        await waitFor(() => {
            expect(mockGetQueueInfo).toHaveBeenCalled();
        });
        const expectedTitle = `Queue: ${shortId(mockQueueInformation[0].id)}`;
        expect(screen.getByTestId("queue-title")).toHaveTextContent(expectedTitle);
    });

    test("Displays loading state initially", () => {
        render(<Queue />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
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
