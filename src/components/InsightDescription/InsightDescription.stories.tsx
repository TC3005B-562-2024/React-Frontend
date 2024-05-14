import { Meta, StoryFn } from '@storybook/react';
import InsightDescription from "./InsightDescription";
import { IInsightDescription } from './types';

const meta = {
    title: 'Components/InsightDescription',
    component: InsightDescription,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        priority: {
            options: ['intervene', 'transfer', 'training'],
            control: { type: 'select' }
        },
        alertId: {
            control: 'text',
        },
        description: {
            control: 'text'
        }
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IInsightDescription> = (args) => <InsightDescription {...args} />;

export const InsightDescriptionIntervene = Template.bind({});
InsightDescriptionIntervene.args = {
    priority: "intervene",
    alertId: 321,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sodales ex. Ut dui ex, tempor a magna eu, commodo lobortis nulla. Suspendisse convallis purus sit amet aliquam blandit. Curabitur in aliquam ipsum. Vivamus sollicitudin enim at enim bibendum ornare. In fringilla non justo eget maximus. Ut id purus vitae nisi aliquam lobortis. Phasellus semper viverra posuere. Quisque orci nunc, laoreet non risus et, fermentum lacinia orci.'
}

export const InsightDescriptionTransfer = Template.bind({});
InsightDescriptionTransfer.args = {
    priority: "transfer",
    alertId: 123,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sodales ex. Ut dui ex, tempor a magna eu, commodo lobortis nulla. Suspendisse convallis purus sit amet aliquam blandit. Curabitur in aliquam ipsum. Vivamus sollicitudin enim at enim bibendum ornare. In fringilla non justo eget maximus. Ut id purus vitae nisi aliquam lobortis. Phasellus semper viverra posuere. Quisque orci nunc, laoreet non risus et, fermentum lacinia orci.'
}

export const InsightDescriptionTraining = Template.bind({});
InsightDescriptionTraining.args = {
    priority: "training",
    alertId: 123,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sodales ex. Ut dui ex, tempor a magna eu, commodo lobortis nulla. Suspendisse convallis purus sit amet aliquam blandit. Curabitur in aliquam ipsum. Vivamus sollicitudin enim at enim bibendum ornare. In fringilla non justo eget maximus. Ut id purus vitae nisi aliquam lobortis. Phasellus semper viverra posuere. Quisque orci nunc, laoreet non risus et, fermentum lacinia orci.'
}
