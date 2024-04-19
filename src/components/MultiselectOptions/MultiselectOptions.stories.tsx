import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import MultiselectOptions from './MultiselectOptions';
import { IMultiselectOptions } from './types';

const meta = {
  title: 'Components/MultiselectOptions',
  component: MultiselectOptions,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    isSelected: {control: 'boolean'},
    label: {control: 'text'}
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiselectOptions>

export default meta;

const Template: StoryFn<IMultiselectOptions> = (args) => <MultiselectOptions {...args} />;

/**
 * A default multiselect option component.
 */

export const Default = Template.bind({});
Default.args = {
  isSelected: false,
  label: 'Option 1',
};