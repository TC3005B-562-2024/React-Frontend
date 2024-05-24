import { Meta, StoryFn } from '@storybook/react';
import { IAgentInfo } from './types';
import AgentInfo from './AgentInfo';

const meta = {
  title: 'Components/AgentInfo',
  component: AgentInfo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    agentName: { control: 'text' },
    sentiment: {
      options: ['POSITIVE', 'NEUTRAL', 'NEGATIVE', undefined],
      control: { type: 'select' },  
    },
    skillArray: { control: 'object' },
    status: {
      options: ['ONCALL', 'AVAILABLE', 'DISCONNECTED'],
      control: { type: 'select' },
    },
    topPriorityAlert: {
      options: ['CRITICAL', 'MEDIUM', 'LOW', undefined],
      control: { type: 'select' },
    }
  },
  tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IAgentInfo> = (args) => <AgentInfo {...args} />;

/**
 * Agent Info with negative sentiment, on call status, and critical alert.
 */
export const AgentInfoNegativeOnCallCritical = Template.bind({});
AgentInfoNegativeOnCallCritical.args = {
  agentName: 'John Doe',
  sentiment: 'NEGATIVE',
  skillArray: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6'],
  status: 'ONCALL',
  topPriorityAlert: 'CRITICAL',
};

/**
 * Agent Info with positive sentiment, available status, and medium alert.
 */
export const AgentInfoPositiveAvailableMedium = Template.bind({});
AgentInfoPositiveAvailableMedium.args = {
  agentName: 'John Doe',
  sentiment: 'POSITIVE',
  skillArray: ['skill1', 'skill2', 'skill3'],
  status: 'AVAILABLE',
  topPriorityAlert: 'MEDIUM',
};

/**
 * Agent Info with neutral sentiment, disconnected status, and low alert.
 */
export const AgentInfoNeutralDisconnectedLow = Template.bind({});
AgentInfoNeutralDisconnectedLow.args = {
  agentName: 'John Doe',
  sentiment: 'NEUTRAL',
  skillArray: ['skill1'],
  status: 'DISCONNECTED',
  topPriorityAlert: 'LOW',
};