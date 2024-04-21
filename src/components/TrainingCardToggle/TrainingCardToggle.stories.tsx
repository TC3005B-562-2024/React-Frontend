import { Meta, StoryFn } from '@storybook/react';
import { ITrainingCardToggle } from './types';
import TrainingCardToggle from './TrainingCardToggle';

const meta = {
    title: 'Components/TrainingCardToggle',
    component: TrainingCardToggle,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        label: {control: 'text'},
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TrainingCardToggle>

export default meta;

const Template: StoryFn<ITrainingCardToggle> = (args) => <TrainingCardToggle {...args} />;

/**
 * A training card toggle component to display an action that include a check mark in case of being completed or incompleted.
 */
export const Default = Template.bind({});
Default.args = {
    label: "Training Description",
    completeButton: {
        isComplete: false,
        color: 'green',
    }
};