import { Meta, StoryFn } from '@storybook/react';
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
        docs: {
            story: {
                inline: false,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        status: {
            options: ['default', 'error'],
            control: { type: 'select' },
        },
    },
    tags: ["autodocs"]
} as Meta<typeof LoginForm>;;

export default meta;

const Template: StoryFn<ILoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormExample = Template.bind({});
LoginFormExample.args = {
    status: 'default',
};