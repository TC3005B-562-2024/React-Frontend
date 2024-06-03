import { Meta, StoryFn } from '@storybook/react';
import Multiselect from './Multiselect';
import { IMultiselect } from './types';

const meta = {
  title: 'Components/Multiselect',
  component: Multiselect,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    options: { control: 'object' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Multiselect>

export default meta;
const Template: StoryFn<IMultiselect> = (args) => <Multiselect {...args} />;


/**
 * A default multiselect component with similar options.
 */
export const MultiselectExample = Template.bind({});
MultiselectExample.args = {
  options: [
    {
      label: 'Option 1',
      isSelected: false,
      onChange: function (_label: string, _isSelected: boolean): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      label: 'Option 2',
      isSelected: true,
      onChange: function (_label: string, _isSelected: boolean): void {
        throw new Error('Function not implemented.');
      }
    }
  ]
}

/**
 * A default multiselect component with a large option.
 */
export const MultiselectExampleLargeOption = Template.bind({});
MultiselectExampleLargeOption.args = {
  options: [
    {
      label: 'Option 1',
      isSelected: false,
      onChange: function (_label: string, _isSelected: boolean): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      label: 'Option 2',
      isSelected: true,
      onChange: function (_label: string, _isSelected: boolean): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      label: 'Very Large Option 3',
      isSelected: true,
      onChange: function (_label: string, _isSelected): void {
        throw new Error('Function not implemented.');
      }
    }
  ]
}
