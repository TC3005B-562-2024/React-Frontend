import { Meta, StoryObj } from '@storybook/react';
import LoginForm from "./LoginForm";
import { ILoginForm } from './types';

const handleLogin = (username: string, password: string) => {
  // logic to handle login, (calling Cognito APIs)
  console.log('Logging in with:', { username, password });
};

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