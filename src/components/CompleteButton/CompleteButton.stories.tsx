import { Meta, StoryFn } from '@storybook/react';
import { ICompleteButton } from './types';
import CompleteButton from './CompleteButton';

const meta = {
    title: 'Components/CompleteButton',
    component: CompleteButton,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        isComplete: {control: 'boolean'},
        color: {
            options: ['red', 'green', 'blue', 'yellow', 'orange'],
            control: { type: 'select' },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CompleteButton>

export default meta;

const Template: StoryFn<ICompleteButton> = (args) => <CompleteButton {...args} />;

/**
 * An complete button component to display a check mark or a radio button in case of a completed or incompleted action.
 */
export const Default = Template.bind({});
Default.args = {
    isComplete: true,
    color: "green",
};