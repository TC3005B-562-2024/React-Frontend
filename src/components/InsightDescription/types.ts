import { IIcon } from "../Icon/types";

export interface IInsightDescription {
    priority: string;
    alertId?: number;
    icon: React.ReactElement<IIcon>
    description: string;
}
