import { Meta, StoryFn } from '@storybook/react';
import { ITrainingCardToggle } from './types';
import TrainingCardToggle from './TrainingCardToggle';
import React from 'react';

const meta = {
    title: 'Components/TrainingCardToggle',
    component: TrainingCardToggle,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        label: {control: 'text'},
        color: {
            options: ['black', 'white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
            control: { type: 'select' },
        },
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
    color: "green",
};