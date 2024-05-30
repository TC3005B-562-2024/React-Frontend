import { IAgentInfo } from "../../components/AgentInfo/types";
import { IAlertResponse } from "../alerts/types";

export interface ISkillBrief {
  id: string;
  resource: string;
  alias: string;
  iconName: string;
}

export interface IMetrics {
  sectionTitle: string;
  sections:   ISection[];
}

export interface ISection {
  sectionTitle: string;
  sectionValue: string;
  color: "black" | "red" | "green" | "yellow" | "gray";
}

export interface ISkillsInformationDTO {
  title: string;
  sections: ISection[];
}

export interface ISkillById {
  id: string;
  arn: string;
  alias: string;
  totalAgents: number;
  queues: string;
  alerts: IAlertResponse;
  skillsInformationDTO: ISkillsInformationDTO;
  trainings: any[];
  metrics: IMetrics;
  agents: IAgentInfo[];
}
