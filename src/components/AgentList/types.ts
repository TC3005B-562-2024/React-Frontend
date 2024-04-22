export interface IAgentInfo {
    agentName: string;
    sentiment?: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
    skillArray: string[];
    status: 'ONCALL' | 'AVAILABLE' | 'DISCONNECTED';
    topPriorityAlert?: 'CRITICAL' | 'MEDIUM' | 'LOW';
  }
  