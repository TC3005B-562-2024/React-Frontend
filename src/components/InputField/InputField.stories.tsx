import { Meta, StoryObj } from '@storybook/react';
import InputField from "./InputField";

const meta = { 
    title: 'Components/InputField',
    component: InputField,
    parameters: {
        layout: 'centered',
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
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GeneralExample: Story = {
    args: {
        id: 'email',
        type: 'text',
        label: 'Email',
        labelPosition: 'center',
        helperText: 'Please enter your email',
        color: 'yellow',
        placeholder: 'Enter your email',
        onChange: () => console.log('On change handler.')
    },
};

export const PasswordExample: Story = {
    args: {
        id: 'password',
        type: 'secret',
        label: 'Password',
        labelPosition: 'center',
        helperText: 'Incorrect password!',
        color: 'green',
        placeholder: 'Enter your password',
        onChange: () => console.log('On change handler.')
    },
};
