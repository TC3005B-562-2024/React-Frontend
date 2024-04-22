import React from 'react';
import AgentInfo from './AgentInfo';
import { IAgentInfo } from './types';

const agents: IAgentInfo[] = [
  {
    agentName: 'John Doe',
    sentiment: 'NEGATIVE',
    skillArray: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6'],
    status: 'ONCALL',
    topPriorityAlert: 'CRITICAL',
  },
  {
    agentName: 'Jane Smith',
    sentiment: 'POSITIVE',
    skillArray: ['skill1', 'skill2', 'skill3'],
    status: 'AVAILABLE',
    topPriorityAlert: 'MEDIUM',
  },
  {
    agentName: 'Alice Johnson',
    sentiment: 'NEUTRAL',
    skillArray: ['skill1'],
    status: 'DISCONNECTED',
    topPriorityAlert: 'LOW',
  },
];

const AgentList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {agents.map((agent, index) => (
        <AgentInfo key={index} {...agent} />
      ))}
    </div>
  );
};

export default AgentList;
