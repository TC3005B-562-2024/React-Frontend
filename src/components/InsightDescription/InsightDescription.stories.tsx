import { Meta, StoryFn } from '@storybook/react';
import InsightDescription from "./InsightDescription";
import { IInsightDescription } from './types';
import { Icon } from '../Icon';

const meta = {
    title: 'Components/InsightDescription',
    component: InsightDescription,
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
            control: { type: 'select' }
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IInsightDescription> = (args) => <InsightDescription {...args} />;

export const InsightDescriptionExample = Template.bind({});
InsightDescriptionExample.args = {
    priority: "Transfer",
    alertId: 123,
    icon: <Icon iconName="star" color='black' />,
    description: 'Insight'
}
