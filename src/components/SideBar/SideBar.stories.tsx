import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Components/SideBar',
  component: SideBar,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ['autodocs'],
  argTypes: {
    skills: { control: 'object' },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;


/**
 * SideBar component with a selected skill and a list of mock skills.
 */
export const ExampleSelectedSkill: Story = {
  args: {
    skills: [
      {
        label: 'Service',
        icon: { iconName: 'alarm' },
        path: '/service',
        isExpanded: true,
      },
      {
        label: 'Sales',
        icon: { iconName: 'call_end' },
        path: '/sales',
        isExpanded: true,
      },
      {
        label: 'Support',
        icon: { iconName: 'clear_night' },
        path: '/',
        isExpanded: true,
      },
      {
        label: 'Quality',
        icon: { iconName: 'instant_mix' },
        path: '/quality',
        isExpanded: true,
      },
    ]
  },
};
