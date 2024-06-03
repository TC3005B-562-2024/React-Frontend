export interface IAgentCardDTO {
    id:               string;
    arn:              string;
    name:             string;
    status:          'ONCALL' | 'Available' | 'DISCONNECTED' | null;
    sentiment:        null;
    queues:           Queue[];
    topPriorityAlert: 'CRITICAL' | 'MEDIUM' | 'LOW' | null;
}

export enum Queue {
    BasicQueue = "BasicQueue",
    CustomerService = "Customer Service",
    FAQ = "FAQ",
    PanoptimizeComplains = "Panoptimize complains",
    PanoptimizeDoubts = "Panoptimize doubts",
    S0S = "S0S",
    StarHorizon = "Star Horizon",
    Team4MobileSupportEnglish = "Team4-Mobile Support English",
    Team4MobileSupportSpanish = "Team4-Mobile Support Spanish",
}

export interface IAgentInformation {
    [x: string]: any;
    agentInfo: any;
    id:                    string;
    arn:                   string;
    information:           TInformationDto;
    metrics:               TInformationDto;
    alerts:                AlertPriorityDTO;
    trainings:             Training[];
    queues:                IQueueMin[];
    contactInformationDTO: any[];
}

export interface TInformationDto {
    sectionTitle:    string;
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

export interface Training {
    id:                        number;
    training:                  Insight;
    interveneContact:          null;
    interveneAgent:            null;
    originalRoutingProfile:    null;
    destinationRoutingProfile: null;
    transferedAgent:           null;
    resource:                  string;
    dateRegistered:            Date;
    dateUpdated:               Date;
    solved:                    boolean;
    dateTrainingCompleted:     Date | null;
    hasTraining:               boolean;
    trainingCompleted:         boolean;
}

export interface Insight {
    identifier:     number;
    category?:      Insight;
    denomination:   string;
    description:    string;
    dateRegistered: Date;
    dateUpdated:    Date;
    active:         boolean;
    priority?:      number;
}

export interface Metrics {
    sectionTitle: string;
    sections:     Section[];
}

export interface IQueueMin {
    id:   string;
    name: string;
}
