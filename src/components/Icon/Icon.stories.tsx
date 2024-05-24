import { Meta, StoryFn } from '@storybook/react';
import { IIcon } from './types';
import Icon from './Icon';
import { iconNames } from './types';

const meta = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        iconName: {
            options: Array.from(iconNames),
            control: { type: 'select' },
        },
        color: {
            options: ['black', 'white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
            control: { type: 'select' },
        },
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
    iconName: 'support_agent',
    color: 'black',
};
