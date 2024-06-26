export interface IQueueInformation {
    id:          string;
    arn:         string;
    information: Information;
    metrics:     Information;
    alerts:      Alerts;
    trainings:   Training[];
    agents:      Agent[];
}

export interface IQueueMin {
    name:               string;
    id:                 string;
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

export interface Alerts {
    high:   Alert[];
    medium: Alert[];
    low:    Alert[];
}

export interface Alert {
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