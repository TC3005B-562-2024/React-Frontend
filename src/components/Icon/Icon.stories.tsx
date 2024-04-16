import { Meta, StoryFn } from '@storybook/react';
import { IIcon } from './types';
import Icon from './Icon';

const meta = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        iconName: { control: 'text' },
        color: {
            options: ['black', 'white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
            control: { type: 'select' },
        },
        filled: { control: 'boolean' },
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Icon>;

export default meta;

const Template: StoryFn<IIcon> = (args) => <Icon {...args} />;

/**
 * A default icon component using Google's symbols.
 */
export const IconExample = Template.bind({});
IconExample.args = {
    iconName: 'star',
    color: 'black',
    filled: true,
};
