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

export interface ITrainingProgress {
  resourceName: string;
  resourceTrainingProgress: number;
}

export interface ISkillById {
  id: string;
  arn: string;
  alias: string;
  totalAgents: number;
  queues: string;
  alerts: IAlertResponse;
  skillsInformationDTO: ISkillsInformationDTO;
  trainings: ITrainingProgress[];
  metrics: IMetrics;
  agents: Agent[];
}
export interface Agent {
  id:               string;
  arn:              string;
  name:             string;
  status:           string;
  sentiment:        null;
  queues:           IQueueMin[];
  topPriorityAlert: null;
}


export interface IQueueMin {
  id:   string;
  name: string;
}
