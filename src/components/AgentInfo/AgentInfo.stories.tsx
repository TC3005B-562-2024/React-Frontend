import { Meta, StoryFn } from '@storybook/react';
import { IAgentInfo } from './types';
import AgentInfo from './AgentInfo';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Components/AgentInfo',
  component: AgentInfo,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: { control: 'text' },
    agentName: { control: 'text' },
    sentiment: {
      options: ['POSITIVE', 'NEUTRAL', 'NEGATIVE', undefined],
      control: { type: 'select' },  
    },
    skillArray: { control: 'object' },
    status: {
      options: ['ONCALL', 'Available', 'DISCONNECTED'],
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
  id: '1',
  name: 'John Doe',
  sentiment: 'NEGATIVE',
  queues: [{ name: 'skill1', id:'1' }, { name: 'skill2', id:'2' }, { name: 'skill3', id:'3' },
  { name: 'skill4', id:'4' }, { name: 'skill5', id:'5' }, { name: 'skill6', id:'6' }],
  status: 'ONCALL',
  topPriorityAlert: 'CRITICAL',
};

/**
 * Agent Info with positive sentiment, available status, and medium alert.
 */
export const AgentInfoPositiveAvailableMedium = Template.bind({});
AgentInfoPositiveAvailableMedium.args = {
  id: '1',
  name: 'John Doe',
  sentiment: 'POSITIVE',
  queues: [{ name: 'skill1', id:'1' }, { name: 'skill2', id:'2' }, { name: 'skill3', id:'3' }],
  status: 'Available',
  topPriorityAlert: 'MEDIUM',
};

/**
 * Agent Info with neutral sentiment, disconnected status, and low alert.
 */
export const AgentInfoNeutralDisconnectedLow = Template.bind({});
AgentInfoNeutralDisconnectedLow.args = {
  id: '1',
  name: 'John Doe',
  sentiment: 'NEUTRAL',
  queues: [{ name: 'skill1', id:'1' }],
  status: 'DISCONNECTED',
  topPriorityAlert: 'LOW',
};