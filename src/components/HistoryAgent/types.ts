import { IIconNoColorNoSize } from "../Icon/types";

export interface IHistoryAgentProps {
    log: string;
    date: Date;
    icon: IIconNoColorNoSize;
    description: string;
    color?: 'red' | 'green';
    status?:'accepted' | 'ignored';
  }