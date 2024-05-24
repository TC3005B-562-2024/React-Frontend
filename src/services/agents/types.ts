import { IAgentInfo } from "../../components/AgentInfo/types";

export interface IAgentCardDTO extends IAgentInfo {
    /**
     * The ARN of the agent.
     */
    arn: string;
}
