import { Meta, StoryFn } from '@storybook/react';
import { IJointTrainingExpansionPanel } from './types';
import JointTrainingExpansionPanel from './JointTrainingExpansionPanel';
import { ProgressBar } from '../ProgressBar';

export default {
  title: 'Components/ProgressCard',
  component: JointTrainingExpansionPanel,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['green', 'yellow', 'red'],
      },
    },
    rounded: {
      control: {
        type: 'boolean',
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
  progress: 50,
  color: 'green',
  agentName : 'Agent Name',
  trainings : [
  ],
};

