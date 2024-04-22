import { Meta, StoryFn } from '@storybook/react';
import { IProgressBar } from './types';
import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
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
    label: {
      control: {
        type: 'text',
      },
    },
    parameters:
    {
        layout : 'centered',
    },
    
  },tags : ["autodocs"]
  
} as Meta;

const Template: StoryFn<IProgressBar> = (args) => <ProgressBar {...args} />;

// Default view of the Progress Bar component
export const DefaultView = Template.bind({});
DefaultView.args = {
  progress: 50,
    color: 'green',
    agentName : 'Agent Name',
    
    
};


