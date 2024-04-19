import { Meta, StoryFn } from '@storybook/react';
import InputField from "./InputField";
import { IInputField } from './types';

const meta = { 
    title: 'Components/InputField',
    component: InputField,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: false,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        color: {
            options: ['black', 'white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
            control: { type: 'select' },
        },
        type: {
            options: ['email', 'number', 'secret', 'text'],
            control: { type: 'select' },
        },
        placeholder: { control: 'text' },
        id: { control: 'text' },
        label: { control: 'text' },
        labelPosition: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        helperText: { control: 'text' },
        onChange: { action: 'changed' },
    },
    tags: ["autodocs"]
} as Meta<typeof InputField>;

export default meta;
const Template: StoryFn<IInputField> = (args) => <InputField {...args} />;

export const InputFieldExample = Template.bind({});
InputFieldExample.args = {
    id: 'email',
    type: 'text',
    label: 'Email',
    labelPosition: 'center',
    helperText: 'Please enter your email',
    color: 'yellow',
    placeholder: 'Enter your email'
};