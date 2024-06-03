import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IAlert } from '../../../services/alerts/types';
import * as serviceModule from '../../../services/skills/getSkillById';
import { ISkillById } from '../../../services/skills/types';
import Skill from '../Skill';

beforeEach(() => {
    return jest.spyOn(serviceModule, 'getSkillById').mockResolvedValue(mockSkillData);
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
        id: "skill123"
    })
}));
jest.mock("../../../services");


const mockSkillData: ISkillById = {
    id: "skill123",
    arn: "someArn",
    alias: "SkillAlias",
    totalAgents: 0,
    queues: "someQueues",
    alerts: {
        high: [],
        medium: [],
        low: []
    },
    skillsInformationDTO: {
        sections: [],
        title: ''
    },
    metrics: {
        sections: [
            { sectionTitle: "Efficiency", sectionValue: "90%", color: "green" }
        ],
        sectionTitle: ''
    },
    trainings: [],
    agents: []
};
afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Tests for Skill page", () => {
    test("The Skill page should render correctly", async () => {
        render(<BrowserRouter><Skill /></BrowserRouter>);
        await waitFor(() => {
            expect(screen.getByTestId("skill-title")).toHaveTextContent(`Skill: ${mockSkillData.alias}`);
        });
        expect(screen.getByText("Efficiency")).toBeInTheDocument();
    });
    test("Should display an error if the skill data fetch fails", async () => {
        jest.spyOn(serviceModule, 'getSkillById').mockRejectedValue(new Error("Failed to fetch skill"));
        render(<BrowserRouter><Skill /></BrowserRouter>);

        await waitFor(() => {
            expect(screen.getByText("Error fetching Skill")).toBeInTheDocument();
        });
    });

    test("Should handle all types of alert priorities", async () => {
        const modifiedSkillData = {
            ...mockSkillData,
            alerts: {
                high: [{ id: 1, insight: { category: { denomination: 'High Priority' }}, resource: 'Resource1' }] as IAlert[],
                medium: [{ id: 2, insight: { category: { denomination: 'Medium Priority' }}, resource: 'Resource2' }] as IAlert[],
                low: [{ id: 3, insight: { category: { denomination: 'Low Priority' }}, resource: 'Resource3' }] as IAlert[]
            }
        };
        jest.spyOn(serviceModule, 'getSkillById').mockResolvedValue(modifiedSkillData);
        render(<BrowserRouter><Skill /></BrowserRouter>);

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
    test("Should handle empty metrics", async () => {
        const modifiedSkillData = {
            ...mockSkillData,
            metrics: {
                sectionTitle: '', 
                sections: []
            }
        };
        jest.spyOn(serviceModule, 'getSkillById').mockResolvedValue(modifiedSkillData);
        render(<BrowserRouter><Skill /></BrowserRouter>);

        await waitFor(() => {
            expect(screen.queryByText("Efficiency")).not.toBeInTheDocument();
        });
    });
    test("Should handle empty skillsInformationDTO", async () => {
        const modifiedSkillData = {
            ...mockSkillData,
            skillsInformationDTO: {
                sections: [],
                title: ''
            }
        };
        jest.spyOn(serviceModule, 'getSkillById').mockResolvedValue(modifiedSkillData);
        render(<BrowserRouter><Skill /></BrowserRouter>);

        await waitFor(() => {
            expect(screen.queryByText("Information")).not.toBeInTheDocument();
        });
    });
    
    
});
