import { Meta, StoryFn } from '@storybook/react';
import { IIndividualTrainingExpansionPanel } from './types';
import IndividualTrainingExpansionPanel from './IndividualTrainingExpansionPanel';

const meta = {
  title: 'Components/IndividualTrainingExpansionPanel',
  component: IndividualTrainingExpansionPanel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: 'text' },
    titleColor: {
      options: ['black', 'red', 'green'],
      control: { type: 'select' },
    },
    trainings: {
      control: { type: 'object' },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IndividualTrainingExpansionPanel>

export default meta;
const Template: StoryFn<IIndividualTrainingExpansionPanel> = (args) => <IndividualTrainingExpansionPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Trainings of Agent John Doe",
  titleColor: "black",
  trainings: [
    {
      label: "Training Description 1",
      isComplete: false,
    },
    {
      label: "Training Description 2",
      isComplete: true,
    },
  ],
};
