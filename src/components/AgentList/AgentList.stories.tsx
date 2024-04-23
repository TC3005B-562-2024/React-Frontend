import { Meta, StoryObj } from '@storybook/react';
import AgentList from './AgentList';

const meta = {
  title: 'Components/AgentList',
  component: AgentList,
  parameters: {
    layout: 'fullscreen', // Cambiado a fullscreen
    docs: {
      description: {
        component: 'A grid of AgentInfo components',
      },
    },
  },
  argTypes: {
    agents: { control: 'object' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AgentList>;

export default meta;

type Story = StoryObj<typeof AgentList>;

export const AgentListExample: Story = {
  args: {
    agents: [
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
      {
        agentName: 'Diego Jacobo',
        skillArray: ['skill1', 'skill2', 'skill3'],
        status: 'DISCONNECTED',
        topPriorityAlert: 'LOW',
      },
    ],
  },
};
