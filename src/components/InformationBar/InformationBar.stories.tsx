import { Meta, StoryFn } from '@storybook/react';
import { IInformationBar } from './types';
import InformationBar from './InformationBar';

const meta = {
    title: 'Components/InformationBar',
    component: InformationBar,
    parameters: {
        layout: 'padded',
        docs: {
            story: {
                inline: true,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        title: { control: 'text' },
        elements: { control: 'object' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IInformationBar> = (args) => <InformationBar {...args} />;

/**
 * An information bar component to display a title and elements.
 */

export const InformationBarExample = Template.bind({});
InformationBarExample.args = {
    title: 'Title',
    elements: [
        {
            title: 'Title',
            content: 'Cosas',
            color: 'red',
        },
        {
            title: 'Title',
            content: 'Cosas',
            color: 'green',
        },
        {
            title: 'Title',
            content: 'Cosas',
            color: 'yellow',
        },
        {
            title: 'Title',
            content: 'Cosas',
            color: 'gray',
        },
        {
            title: 'Title',
            content: 'Cosas',
            color: 'black',
        },
    ]
}
