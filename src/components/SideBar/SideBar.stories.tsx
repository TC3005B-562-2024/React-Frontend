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
        id: '1',
        resource: 'skill1',
        alias: 'Skill 1',
        iconName: 'social_leaderboard',
      },
      {
        id: '2',
        resource: 'skill2',
        alias: 'Skill 2',
        iconName: 'visibility_off',
      },
      {
        id: '3',
        resource: 'skill3',
        alias: 'Skill 3',
        iconName: 'mitre',
      },
    ]
  },
};
