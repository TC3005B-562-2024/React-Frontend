import { Meta, StoryFn } from '@storybook/react';
import { IItemSubitem } from './types';
import ItemSubitem from './ItemSubitem';

const meta = {
    title: 'Components/ItemSubitem',
    component: ItemSubitem,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: true,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        color: {
            options: ['black', 'red', 'green', 'yellow', 'gray'],
            control: { type: 'select' },
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IItemSubitem> = (args) => <ItemSubitem {...args} />;

/**
 * An item subitem component to display a title and content.
 */
export const ItemSubitemExample = Template.bind({});
ItemSubitemExample.args = {
    title: 'Title',
    content: 'Content',
    color: 'green',
};
