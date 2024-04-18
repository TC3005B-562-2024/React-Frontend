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
    icon: <Icon iconName="star" color="orange" />,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sodales ex. Ut dui ex, tempor a magna eu, commodo lobortis nulla. Suspendisse convallis purus sit amet aliquam blandit. Curabitur in aliquam ipsum. Vivamus sollicitudin enim at enim bibendum ornare. In fringilla non justo eget maximus. Ut id purus vitae nisi aliquam lobortis. Phasellus semper viverra posuere. Quisque orci nunc, laoreet non risus et, fermentum lacinia orci.'
}
