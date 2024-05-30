export interface ISkillInformation {
    id:                   string;
    arn:                  string;
    alias:                string;
    totalAgents:          number;
    queues:               null;
    alerts:               Alerts;
    skillsInformationDTO: SkillsInformationDTO;
    trainings:            any[];
    metrics:              Metrics;
    agents:               Agent[];
}

export interface Agent {
    id:               string;
    arn:              string;
    name:             string;
    status:           string;
    sentiment:        null;
    queues:           string[];
    topPriorityAlert: null;
}

export interface Alerts {
    high:   any[];
    medium: any[];
    low:    any[];
}

export interface Metrics {
    sectionTitle: string;
    sections:     Section[] | null;
}

export interface SkillsInformationDTO {
    title:    string;
    sections: Section[];
}

export interface Section {
    sectionTitle: string;
    sectionValue: string;
    color:        string;
}