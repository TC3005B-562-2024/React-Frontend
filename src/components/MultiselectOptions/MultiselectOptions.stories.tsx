import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MultiselectOptions, { IMultiselectOptions } from './MultiselectOptions';

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
} as Meta<typeof MultiselectOptions>

export default meta;

const Template: Story<IMultiselectOptions> = (args) => <MultiselectOptions {...args} />;

/**
 * A default multiselect option component.
 */

export const Default = Template.bind({});
Default.args = {
  isSelected: false,
  label: 'Option 1',
};