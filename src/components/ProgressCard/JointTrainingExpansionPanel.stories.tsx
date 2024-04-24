import { Meta, StoryFn } from '@storybook/react';
import { IJointTrainingExpansionPanel } from './types';
import JointTrainingExpansionPanel from './JointTrainingExpansionPanel';

export default {
  title: 'Components/ProgressCard',
  component: JointTrainingExpansionPanel,
  argTypes: {
    trainings: { control: 'object' },
    color: {
      control: {
        type: 'select',
        options: ['green', 'yellow', 'red'],
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    parameters:
    {
        layout : 'centered', 
    },
  },
  tags : ["autodocs"]
  
} as Meta;

const Template: StoryFn<IJointTrainingExpansionPanel> = (args) => <JointTrainingExpansionPanel {...args} />;
// Default view of the Progress Bar component
export const DefaultView = Template.bind({});
DefaultView.args = {
  label: 'Trainings of calls',
  trainings: [["10", "20", "30", "40", "50"], ["Juan", "Pedro", "Maria", "Jose", "Luis"],["calls"]] 
};

