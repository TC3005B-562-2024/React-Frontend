import { render, screen, waitFor } from "@testing-library/react";
import { cleanup } from "@testing-library/react-hooks";

import { BrowserRouter } from "react-router-dom";
import * as serviceModule from '../../../services'; // Asegúrate de importar correctamente
import { Low } from "../../../services/queue/types";

beforeEach(() => {
    jest.spyOn(serviceModule, 'getQueueInfo').mockResolvedValue(mockQueueInfo);
});

afterEach(() => {
    jest.restoreAllMocks();
});
beforeAll(() => {
    // Guarda la referencia original
    global.console = { ...console };
    // Sobrescribe console.error
    console.error = jest.fn();
  });
  
  afterAll(() => {
    // Restaura console.error a su funcionalidad original
    console.error = global.console.error;
  });

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: "123"
    })
}));

jest.mock("../../../services");

const mockQueueInfo = {
    id: "123",
    arn: "arn:aws:sqs:us-west-2:123456789012:queue1",
    information: {
        sectionTitle: "General Info",
        sections: [
            { sectionTitle: "Name", sectionValue: "Queue1", color: "green" }
        ]
    },
    metrics: {
        sectionTitle: "Metrics",
        sections: [
            { sectionTitle: "Messages", sectionValue: "20", color: "yellow" }
        ]
    },
    alerts: {
        high: [],
        medium: [],
        low: []
    },
    trainings: [],
    agents: []
};


afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Tests for Queue page", () => {
    test("The Queue page should render correctly", async () => {

        render(<BrowserRouter><Queue /></BrowserRouter>);
        await waitFor(() => {
            expect(screen.getByTestId("queue-title")).toHaveTextContent("Queue: 123");
        });
        expect(screen.getByText("General Info")).toBeInTheDocument();
        expect(screen.getByText("Metrics")).toBeInTheDocument();
    });

    test("Should display an error if the data fetch fails", async () => {
        jest.spyOn(serviceModule, 'getQueueInfo').mockRejectedValue(new Error("Failed to fetch"));
        render(<BrowserRouter><Queue /></BrowserRouter>);


        await waitFor(() => {
            expect(screen.getByText("Critic")).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText("Medium")).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText("Low")).toBeInTheDocument();
        });
    });

    test("Should handle all types of alert priorities", async () => {
        const modifiedQueueInfo = {
            ...mockQueueInfo,
            alerts: {
                high: [{ id: 1, insight: { category: { denomination: 'High Priority' }}, resource: 'Resource1' }],
                medium: [{ id: 2, insight: { category: { denomination: 'Medium Priority' }}, resource: 'Resource2' }],
                low: [{ id: 3, insight: { category: { denomination: 'Low Priority' }}, resource: 'Resource3' }] as Low[]
            }
        };
        jest.spyOn(serviceModule, 'getQueueInfo').mockResolvedValue(modifiedQueueInfo);
        render(<BrowserRouter><Queue /></BrowserRouter>);
    
        await waitFor(() => {
            expect(screen.getByText("Critical")).toBeInTheDocument();
            expect(screen.getByText("Medium")).toBeInTheDocument();
            expect(screen.getByText("Low")).toBeInTheDocument();
        });
    });


});
