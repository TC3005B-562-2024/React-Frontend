export interface IAlertResponse {
  high:   IAlert[];
  medium: IAlert[];
  low:    IAlert[];
}

export interface IAlert {
  id:                     number;
  connection:             Connection;
  insight:                Insight;
  training?:              Training;
  resource:               string;
  dateRegistered:         Date;
  dateUpdated:            Date;
  solved:                 boolean;
  dateTrainingCompleted?: Date;
  hasTraining:            boolean;
  trainingCompleted:      boolean;
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
  category:       Category;
  denomination:   string;
  description:    string;
  dateRegistered: Date;
  dateUpdated:    Date;
  active:         boolean;
  priority?:      number;
}

export interface Category {
  identifier:     number;
  denomination:   string;
  description:    string;
  dateRegistered: Date;
  dateUpdated:    Date;
  active:         boolean;
  priority:       number;
}

export interface Training {
  identifier:    number;
  denomination: string;
  description:   string;
  dateRegistered: Date;
  dateUpdated:  Date;
  active:       boolean;
}
