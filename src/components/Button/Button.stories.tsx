import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: fn(),
        text: {
            control: 'text',
        },
        size: {
            options: ['banner', 'section-title' , 'title' , 'text' , 'detail'],
            control: { type: 'select' },
        },
        color: {
            options: ['white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
            control: { type: 'select' },
        },
        icon: { control: 'object' },
        shadow: { control: 'boolean' },
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Orange: Story = {
  args: {
        onClick: () => alert('Has presionado un botón!'),
        text: 'Click me!',
        size: 'banner',
        color: 'orange',
        icon: {iconName: 'search', filled: true},
        shadow: true,
  },
};
