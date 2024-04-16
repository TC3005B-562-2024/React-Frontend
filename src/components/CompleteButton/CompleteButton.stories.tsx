import { Meta, StoryFn } from '@storybook/react';
import { ICompleteButton } from './types';
import CompleteButton from './CompleteButton';
import React from 'react';

const meta = {
    title: 'Components/CompleteButton',
    component: CompleteButton,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        isComplete: {control: 'boolean'},
        color: {
            options: ['black', 'white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
            control: { type: 'select' },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CompleteButton>

export default meta;

const Template: StoryFn<ICompleteButton> = (args) => <CompleteButton {...args} />;
/*
 * A default movie card with all the props
*/
export const Default = Template.bind({});
Default.args = {
    isComplete: true,
    color: "green",
};