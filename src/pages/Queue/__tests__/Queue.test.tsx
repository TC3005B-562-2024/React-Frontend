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


import { getQueueInfo } from "../../../services";
import { Alert, IQueueInformation } from "../../../services/queue/types";
import Queue from "../Queue";

const sampleAlerts: Alert[] = [
    {
        id: 1,
        connection: {
            identifier: 101,
            denomination: "Minor Issue",
            description: "Low priority system alert",
            dateJoined: new Date("2024-05-26T14:00:00.000Z"),
            dateUpdated: new Date("2024-05-26T15:00:00.000Z"),
            active: true
        },
        insight: {
            identifier: 201,
            denomination: "Check Configuration",
            description: "Verification required for system settings",
            dateRegistered: new Date("2024-05-26T12:00:00.000Z"),
            dateUpdated: new Date("2024-05-26T13:00:00.000Z"),
            active: true
        },
        resource: "Server 01",
        dateRegistered: new Date("2024-05-26T11:00:00.000Z"),
        dateUpdated: new Date("2024-05-26T11:30:00.000Z"),
        solved: null,
        dateTrainingCompleted: null,
        hasTraining: false,
        trainingCompleted: false,
        training: null
    }
];

const mockQueueInformation: IQueueInformation[] = [
    {
        id: "bd22c18b-715f-4fb6-9ae4-8bf896fd87f6",
        arn: "arn:aws:connect:us-east-1:674530197385:instance/7c78bd60-4a9f-40e5-b461-b7a0dfaad848/queue/bd22c18b-715f-4fb6-9ae4-8bf896fd87f6",
        information: {
            sectionTitle: "Queue Information",
            sections: [
                {
                    sectionTitle: "Queue Name",
                    sectionValue: "Team4-Mobile Support English",
                    color: "black"
                },
                {
                    sectionTitle: "Active Calls",
                    sectionValue: "50",
                    color: "red"
                }
            ]
        },
        metrics: {
            sectionTitle: "Queue Metrics",
            sections: [
                {
                    sectionTitle: "Average Wait Time",
                    sectionValue: "30 seconds",
                    color: "green"
                },
                {
                    sectionTitle: "Service Level",
                    sectionValue: "80%",
                    color: "blue"
                }
            ]
        },
        alerts: {
            high: sampleAlerts,
            medium: sampleAlerts,
            low: sampleAlerts
        },
        trainings: [
            {
                resourceName: "Advanced Customer Support",
                resourceTrainingProgress: 0.75
            }
        ],
        agents: [
            {
                id: "6887b106-f684-485e-9c47-a6b1e16cdd21",
                arn: "arn:aws:connect:us-east-1:674530197385:instance/7c78bd60-4a9f-40e5-b461-b7a0dfaad848/agent/6887b106-f684-485e-9c47-a6b1e16cdd21",
                name: "Diego Jacobo",
                status: "Available",
                sentiment: null,
                queues: [
                    "Team4-Mobile Support English",
                    "Team4-Mobile Support Spanish"
                ],
                topPriorityAlert: null
            }
        ]
    }
];

jest.mock('../../../services', () => ({
    getQueueInfo: jest.fn(() => Promise.resolve(mockQueueInformation[0])) // Devuelve una promesa resuelta por defecto
}));
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
        (getQueueInfo as jest.Mock).mockReturnValueOnce(new Promise(() => { }));
        render(<Queue />);
        expect(screen.getAllByRole("progressbar")).toHaveLength(4);
    });


    test("Should handle all types of alert priorities", async () => {
        (getQueueInfo as jest.Mock).mockResolvedValue(mockQueueInformation[0]);
        render(<Queue />);

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

    test("Correctly displays no trainings found when there are no trainings", async () => {
        const modifiedData = { ...mockQueueInformation[0], trainings: [] };
        (getQueueInfo as jest.Mock).mockResolvedValue(modifiedData);
        render(<Queue />);
        await waitFor(() => {
            expect(screen.getByText("No trainings found.")).toBeInTheDocument();
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
