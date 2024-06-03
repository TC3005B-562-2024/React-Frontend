import { IQueueInformation } from "../queue/types";


export const mockQueueInformation: IQueueInformation[] = [
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
      high: [],
      medium: [],
      low: [
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
      ]
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
