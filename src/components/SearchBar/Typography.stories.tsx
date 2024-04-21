import { Meta, StoryFn } from '@storybook/react';
import { ITypography } from './types';
import Typography from './Typography';

const meta = {
    title: 'Components/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: false,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        type: {
            options: ['banner', 'section title', 'title', 'text'],
            control: { type: 'select' },
        },
        color: {
            options: ['black', 'white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
            control: { type: 'select' },
        },
        bold: { control: 'boolean' },
        text: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<ITypography> = (args) => <Typography {...args} />;

/**
 * A default typography component to standardize text across the application.
 */
export const TypographyExample = Template.bind({});
TypographyExample.args = {
    type: 'banner',
    color: 'black',
    bold: true,
    text: 'Banner Text',
};
