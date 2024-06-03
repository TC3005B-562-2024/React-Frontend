import { Meta, StoryObj } from '@storybook/react';
import AgentList from './AgentList';
import { withReactContext } from 'storybook-react-context';

const meta = {
  title: 'Components/AgentList',
  component: AgentList,
  decorators: [withReactContext],
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
        id: '1',
        name: 'John Doe',
        sentiment: 'NEGATIVE',
        queues: ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6'],
        status: 'ONCALL',
        topPriorityAlert: 'CRITICAL',
      },
      {
        id: '2',
        name: 'Jane Smith',
        sentiment: 'POSITIVE',
        queues: ['skill1', 'skill2', 'skill3'],
        status: 'Available',
        topPriorityAlert: 'MEDIUM',
      },
      {
        id: '3',
        name: 'Alice Johnson',
        sentiment: 'NEUTRAL',
        queues: ['skill1'],
        status: 'DISCONNECTED',
        topPriorityAlert: 'LOW',
      },
      {
        id: '4',
        name: 'Diego Jacobo',
        queues: ['skill1', 'skill2', 'skill3'],
        status: 'DISCONNECTED',
        topPriorityAlert: 'LOW',
      },
    ],
  },
};
