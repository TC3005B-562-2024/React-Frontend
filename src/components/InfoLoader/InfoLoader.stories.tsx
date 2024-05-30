import { Meta, StoryFn } from '@storybook/react';
import InfoLoader from './InfoLoader';

export default {
  title: 'Components/InfoLoader',
  component: InfoLoader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Loader for simple information data.',
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) => <InfoLoader {...args} />;


export const InfoLoaderExample = Template.bind({});
InfoLoaderExample.args = {};
