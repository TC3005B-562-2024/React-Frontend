import React, { act } from 'react';
import { render, screen, waitFor, cleanup } from "@testing-library/react";
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
                    {
                        name: "Team4-Mobile Support English",
                        id: "1"
                    },
                    {
                        name: "Team4-Mobile Support Spanish",
                        id: "2"
                    }
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

describe(" Tests for Queue page", () => {
    test("ID: F.Queue.1The Queue page should render correctly", async () => {
        (getQueueInfo as jest.Mock).mockResolvedValue(mockQueueInformation[0]);

        act(() => {
            render(<Queue />);
        });
        await waitFor(() => {
            expect(getQueueInfo).toHaveBeenCalled();
        });

        await waitFor(() => {
            expect(screen.getByTestId("queue-information-metrics-section")).toBeInTheDocument();
        });
            
        expect(screen.getByTestId("queue-title")).toBeInTheDocument();
        expect(screen.getByTestId("queue-information-metrics-section")).toBeInTheDocument();
        expect(screen.getByTestId("alerts-section")).toBeInTheDocument();
        expect(screen.getByTestId("trainings-section")).toBeInTheDocument();
        expect(screen.getByTestId("agents-section")).toBeInTheDocument();
    });

    test("ID: F.Queue.2 Displays loading state initially", () => {
        (getQueueInfo as jest.Mock).mockReturnValueOnce(new Promise(() => { }));
        render(<Queue />);
        expect(screen.getAllByRole("progressbar")).toHaveLength(4);
    });


    test("ID: F.Queue.3 Should handle all types of alert priorities", async () => {
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

    test("ID: F.Queue.4 Correctly displays no trainings found when there are no trainings", async () => {
        const modifiedData = { ...mockQueueInformation[0], trainings: [] };
        (getQueueInfo as jest.Mock).mockResolvedValue(modifiedData);
        render(<Queue />);
        await waitFor(() => {
            expect(screen.getByText("No trainings found.")).toBeInTheDocument();
        });
    });

    test("ID: F.Queue.5 Correctly displays agents information", async () => {
        (getQueueInfo as jest.Mock).mockResolvedValue(mockQueueInformation[0]);
        render(<Queue />);
        await waitFor(() => {
            expect(screen.getByText("Diego Jacobo")).toBeInTheDocument();
        });
    });
});
