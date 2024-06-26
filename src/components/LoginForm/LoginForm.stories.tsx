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
        attemptsError: {
            control: { type: 'boolean' },
        },
    },
    tags: ["autodocs"]
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleSubmit = (email: string, password: string) => {
  console.log("Submitted email:", email);
  console.log("Submitted password:", password);
};

const handleInputChange = () => {
  console.log('Input changed, resetting status to default...');
};

export const Default: Story = {
    args: {
        status: 'default',
        onSubmit: handleSubmit,
        onInputChange: handleInputChange,
        attemptsError: false,
    },
};

export const Error: Story = {
    args: {
        status: 'error',
        onSubmit: handleSubmit,
        onInputChange: handleInputChange,
        attemptsError: false,
    },
};

export const AttemptsError: Story = {
    args: {
        status: 'error',
        onSubmit: handleSubmit,
        onInputChange: handleInputChange,
        attemptsError: true,
    },
};
