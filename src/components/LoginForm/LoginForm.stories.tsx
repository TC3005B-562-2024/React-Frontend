import { Meta, StoryObj } from '@storybook/react';
import LoginForm from "./LoginForm";

// logic to handle login, (calling Cognito APIs)
// Aquí estaba una función, la borre porque no es necesaria para el ejemplo
// Además, no se puede hacer el build porque no se está utilizando

const meta = {
    title: 'Components/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        status: {
            options: ['default', 'error'],
            control: { type: 'select' },
        },
    },
    tags: ["autodocs"]
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        status: 'default',
    },
};

export const Error: Story = {
    args: {
        status: 'error',
    },
};
