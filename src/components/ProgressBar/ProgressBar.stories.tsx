import { Meta, StoryFn } from '@storybook/react';
import { IProgressBar } from './types';
import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: 'A progress bar component that displays a progress bar with a label and a percentage value.',
      },
    },
  },
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
    
  },tags : ["autodocs"]
  
} as Meta;

const Template: StoryFn<IProgressBar> = (args) => <ProgressBar {...args} />;

// Default view of the Progress Bar component
export const Completed = Template.bind({});
Completed.args = {
  progress: 100,
  color: 'green',
  label : 'Agent Name',
};

export const Uncompleted = Template.bind({});
Uncompleted.args = {
  progress: 80,
  color: 'yellow',
  label : 'Agent Name',
};
