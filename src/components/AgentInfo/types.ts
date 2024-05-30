export interface IAgentInfo {
  /**
   * The id of the agent.
   */
  id: string;
  /**
   * The name of the agent.
   */
  name: string;
  /**
   * The emotion of the agent call.
   */
  sentiment?: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE' | null;
  /**
   * The queues of the agent.
   */
  queues: Array<string>;
  /**
   * The status of the agent.
   */
  status: 'ONCALL' | 'Available' | 'DISCONNECTED' | null;
  /**
   * The top priority alert of the agent.
   */
  topPriorityAlert?: 'CRITICAL' | 'MEDIUM' | 'LOW' | null;
}
