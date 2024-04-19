import {IIcon} from "../Icon/types";

    export type EmotionType = "Positive" | "Neutral" | "Negative";
    
    export interface IAgentInfo {
        AgentName: string
        Emotion : EmotionType;
        skillArray: Array<string>;
        Status: React.ReactElement<IIcon>
        topPriorityAlert?:React.ReactElement<IIcon>
    
}
/*Emotion = "POSITIVE" | "NEUTRAL" | "NEGATIVE";
    Status = "ONCALL" | "AVAILABLE" | "DISCONNECTED";
    Priority = "CRITICAL" | "MEDIUM" | "LOW";
    agentName: string
    emotion?: POSITIVE | NEUTRAL | NEGATIVE
    skillArray: String[]
    status: ONCALL | AVAILABLE | DISCONECTED
    topPriorityAlert?: CRITIC | MEDIUM | LOW*/