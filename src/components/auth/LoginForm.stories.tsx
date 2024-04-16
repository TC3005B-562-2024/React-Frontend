import { Meta, StoryFn } from '@storybook/react';
import LoginForm from "./LoginForm";

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
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn = () => <LoginForm/>;

export const LoginFormExample = Template.bind({});