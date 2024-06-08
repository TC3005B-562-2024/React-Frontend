import { render, screen, waitFor,cleanup } from "@testing-library/react";
import Agent from "../Agent";
import { BrowserRouter } from "react-router-dom";
import * as serviceModule from '../../../services'; 
import { IAlert } from "../../../services/alerts/types";
import { IAgentInformation, Training } from "../../../services/agents/types";


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

const mockAgentInfo: IAgentInformation = {
  id: "123",
  arn: "arn:aws:ec2:us-east-1:123456789012:instance/i-1234567890abcdef0",
  information: {
    sectionTitle: "General Information",
    sections: [
      { sectionTitle: "Name", sectionValue: "Agent123", color: "green" }
    ]
  },
  metrics: {
    sectionTitle: "Performance Metrics",
    sections: [
      { sectionTitle: "Calls Handled", sectionValue: "100", color: "red" }
    ]
  },
  alerts: {
    high: [
      { id: 1, insight: { category: { denomination: 'High Priority' }, denomination: "High Risk", description: "Risk of attrition", dateRegistered: new Date(), dateUpdated: new Date(), active: true }, resource: "Resource1" }
    ],
    medium: [
      { id: 2, insight: { category: { denomination: 'Medium Priority' }, denomination: "Medium Risk", description: "Medium performance issue", dateRegistered: new Date(), dateUpdated: new Date(), active: true }, resource: "Resource2" }
    ],
    low: [
      { id: 3, insight: { category: { denomination: 'Low Priority' }, denomination: "Low Risk", description: "Low impact issue", dateRegistered: new Date(), dateUpdated: new Date(), active: true }, resource: "Resource3" }
    ]
  },
  trainings: [
    {
      id: 1, training: { identifier: 1, denomination: "Training 1", description: "Basic Skills", dateRegistered: new Date(), dateUpdated: new Date(), active: true }, trainingCompleted: true,
      interveneContact: null,
      interveneAgent: null,
      originalRoutingProfile: null,
      destinationRoutingProfile: null,
      transferedAgent: null,
      resource: "",
      dateRegistered: new Date(),
      dateUpdated: new Date(),
      solved: false,
      dateTrainingCompleted: null,
      hasTraining: false
    },
    {
      id: 2, training: { identifier: 2, denomination: "Training 2", description: "Advanced Skills", dateRegistered: new Date(), dateUpdated: new Date(), active: true }, trainingCompleted: false,
      interveneContact: null,
      interveneAgent: null,
      originalRoutingProfile: null,
      destinationRoutingProfile: null,
      transferedAgent: null,
      resource: "",
      dateRegistered: new Date(),
      dateUpdated: new Date(),
      solved: false,
      dateTrainingCompleted: null,
      hasTraining: false
    }
  ],
  contactInformationDTO: [
    { title: "Primary Contact", sections: [{ sectionTitle: "Phone", sectionValue: "555-1234", color: "blue" }] }
  ],
  agentInfo: undefined,
  queues: []
};

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Agent Component Tests", () => {
  test("ID: F.Agent.1 The Agent page should render correctly", async () => {
    render(<BrowserRouter><Agent /></BrowserRouter>);
    await waitFor(() => {
      expect(screen.getByTestId("Main container")).toBeInTheDocument();
    });
  });

  test("ID: F.Agent.2 Should display an error message if the data fetch fails", async () => {
    jest.spyOn(serviceModule, 'getAgentById').mockRejectedValue(new Error("Failed to fetch"));
    render(<BrowserRouter><Agent /></BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByText("Error fetching agent data")).toBeInTheDocument();
    });
  });

  test("ID: F.Agent.3 Should handle all types of alert priorities", async () => {
    const modifiedAgentInfo: IAgentInformation = {
       ...mockAgentInfo,
       agentInfo: null,
       queues: [],
       alerts: {
        high: [{ id: 1, insight: { category: { denomination: 'High Priority' }}, resource: 'Resource1' }] as IAlert[],
        medium: [{ id: 2, insight: { category: { denomination: 'Medium Priority' }}, resource: 'Resource2' }] as IAlert[],
        low: [{ id: 3, insight: { category: { denomination: 'Low Priority' }}, resource: 'Resource3' }] as IAlert[]
       },
       trainings: [] as Training[],
    };
    jest.spyOn(serviceModule, 'getAgentById').mockResolvedValue(modifiedAgentInfo);
    render(<BrowserRouter><Agent /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByText("Critic")).toBeInTheDocument();
      expect(screen.getByText("Medium")).toBeInTheDocument();
      expect(screen.getByText("Low")).toBeInTheDocument();
    });
  });
  test("ID: F.Agent.4 Should display the agent information", async () => {
    jest.spyOn(serviceModule, 'getAgentById').mockResolvedValue(mockAgentInfo);
    render(<BrowserRouter><Agent /></BrowserRouter>);
  
    await waitFor(() => {
      expect(screen.getByText("Agent:")).toBeInTheDocument();
      expect(screen.getByText("Agent123")).toBeInTheDocument();
      expect(screen.getByText("123...123")).toBeInTheDocument(); 
    });
  });

 

});