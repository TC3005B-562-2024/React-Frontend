import { Meta, StoryFn } from '@storybook/react';
import { IButton } from './types';
import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: { control: { disable: true } },
        typo: { control: 'object' },
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

const Template: StoryFn<IButton> = (args) => <Button {...args} />;

/**
 * A default Button component using Google's symbols.
 */
export const ButtonExample = Template.bind({});

ButtonExample.args = {
    onClick: () => alert('Has presionado un botón!'),
    typo: {type: 'banner', text: 'Click me!'},
    color: 'orange',
    icon: {iconName: 'search', filled: true},
    shadow: true,
};
