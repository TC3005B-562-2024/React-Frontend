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
 * A training card toggle component to display an action that include a check mark in case of incompleted.
 */
export const IncompleteCard = Template.bind({});
IncompleteCard.args = {
    label: "Training Description",
    isComplete: false,
};

/**
 * A training card toggle component to display an action that include a check mark in case of completed.
 */
export const CompleteCard = Template.bind({});
CompleteCard.args = {
    label: "Training Description",
    isComplete: true,
};