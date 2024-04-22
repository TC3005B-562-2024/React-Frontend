export interface IAgentInfo {
	/**
	 * The name of the agent.
	 */
	agentName: string;
	/**
	 * The emotion of the agent call.
	 */
	sentiment?: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
	/**
	 * The skills of the agent.
	 */
	skillArray: Array<string>;
	/**
	 * The status of the agent.
	 */
	status: 'ONCALL' | 'AVAILABLE' | 'DISCONNECTED';
	/**
	 * The top priority alert of the agent.
	 */
	topPriorityAlert?: 'CRITICAL' | 'MEDIUM' | 'LOW';
};