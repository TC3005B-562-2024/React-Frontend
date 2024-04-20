import { IIcon } from "../Icon/types";

export type PriorityType = "intervene" | "transfer" | "training";

export interface IInsightDescription {
    priority: PriorityType;
    alertId?: number;
    icon: React.ReactElement<IIcon>
    description: string;
}
