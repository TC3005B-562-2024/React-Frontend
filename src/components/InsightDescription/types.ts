export type PriorityType = "intervene" | "transfer" | "training";

export interface IInsightDescription {
    /**
     * Priority of the Insight
     */
    priority: PriorityType;
    /**
     * Id of Alert
     */
    alertId?: number;
    /**
     * Description of the Insight
     */
    description: string;
}
