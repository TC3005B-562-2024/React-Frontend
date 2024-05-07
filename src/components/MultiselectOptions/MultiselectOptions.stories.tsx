import { StoryObj, Meta } from '@storybook/react';
import MultiselectOptions from './MultiselectOptions';

const meta = {
  title: 'Components/MultiselectOptions',
  component: MultiselectOptions,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    isSelected: { control: 'boolean' },
    label: { control: 'text' }
  },
  tags: ['autodocs'],

} satisfies Meta<typeof MultiselectOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Example of the component when the isSelected == false.
 */
export const MultiselectOptionsUnchecked: Story = {
  args: {
    isSelected: false,
    label: 'Option 1',
  },
};

/**
 * Example of the component when the isSelected == true.
 */
export const MultiselectOptionsChecked: Story = {
  args: {
    isSelected: true,
    label: 'Option 2',
  },
};
