export interface IQueueInformation {
    map: any;
    id:          string | undefined;
    arn:         string;
    information: Information;
    metrics:     Information;
    alerts:      Alerts;
    trainings:   Training[];
    agents:      any[];
}

export interface Alerts {
    high:   any[];
    medium: any[];
    low:    Low[];
}

export interface Low {
    id:                    number;
    connection:            Connection;
    insight:               Insight;
    training:              null;
    resource:              string;
    dateRegistered:        Date;
    dateUpdated:           Date;
    solved:                null;
    dateTrainingCompleted: null;
    hasTraining:           boolean;
    trainingCompleted:     boolean;
}

export interface Connection {
    identifier:   number;
    denomination: string;
    description:  string;
    dateJoined:   Date;
    dateUpdated:  Date;
    active:       boolean;
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

export interface Information {
    sectionTitle: string;
    sections:     Section[] | null;
}

export interface Section {
    sectionTitle: string;
    sectionValue: string;
    color:        string;
}

export interface Training {
    resourceName:             string;
    resourceTrainingProgress: number;
}