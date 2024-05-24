export interface IAlertDataResponse {
    id:                    string;
    resource:              string;
    queues:                Queue[];
    agentInformationDTO:   AgentInformationDTO;
    contactInformationDTO: any[];
    alertPriorityDTO:      AlertPriorityDTO;
    trainings:             any[];
    metrics:               Metrics;
}

export interface AgentInformationDTO {
    title:    string;
    sections: Section[];
}

export interface Section {
    sectionTitle: string;
    sectionValue: null | string;
    color:        string;
}

export interface AlertPriorityDTO {
    high:   any[];
    medium: any[];
    low:    any[];
}

export interface Metrics {
    sectionTitle: string;
    sections:     null;
}

export interface Queue {
    id:   string;
    name: string;
}