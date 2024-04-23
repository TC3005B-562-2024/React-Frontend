import React from 'react';
import { AgentInfo } from '..';
import { IAgentList } from './types';

/**
 * A grid of AgentInfo components
 * 
 * @param agentsData Array of IAgentInfo
 * @returns
 */
const AgentList: React.FC<IAgentList> = (agentsData) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {agentsData.agents.map((agent, index) => (
        <AgentInfo key={index} {...agent} />
      ))}
    </div>
  );
};

export default AgentList;
