import { StoryFn, Meta } from '@storybook/react';
import Filters from './Filters';
import { IFilters } from './types';

const meta = {
  title: 'Components/Filters',
  component: Filters,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    options: { control: 'object' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filters>;

export default meta;

const Template: StoryFn<IFilters> = (args) => <Filters {...args} />;

export const FiltersExample = Template.bind({});
FiltersExample.args = {
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
      isSelected: false,
      onChange: function (_label: string, _isSelected: boolean): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      label: 'Option 3',
      isSelected: false,
      onChange: function (_label: string, _isSelected: boolean): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      label: 'Option 4',
      isSelected: false,
      onChange: function (_label: string, _isSelected: boolean): void {
        throw new Error('Function not implemented.');
      }
    },
  ]
};
