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
        queues: [{ name: 'skill1', id:'1' }, { name: 'skill2', id:'2' }, { name: 'skill3', id:'3' },
          { name: 'skill4', id:'4' }, { name: 'skill5', id:'5' }, { name: 'skill6', id:'6' }],
        status: 'ONCALL',
        topPriorityAlert: 'CRITICAL',
      },
      {
        id: '2',
        name: 'Jane Smith',
        sentiment: 'POSITIVE',
        queues: [{ name: 'skill1', id:'1' }, { name: 'skill2', id:'2' }, { name: 'skill3', id:'3' }],
        status: 'Available',
        topPriorityAlert: 'MEDIUM',
      },
      {
        id: '3',
        name: 'Alice Johnson',
        sentiment: 'NEUTRAL',
        queues: [{ name: 'skill1', id:'1' }],
        status: 'DISCONNECTED',
        topPriorityAlert: 'LOW',
      },
      {
        id: '4',
        name: 'Diego Jacobo',
        queues: [{ name: 'skill1', id:'1' }, { name: 'skill2', id:'2' }, { name: 'skill3', id:'3' }],
        status: 'DISCONNECTED',
        topPriorityAlert: 'LOW',
      },
    ],
  },
};
