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

/**
 * A default filters component with similar options.
 */
export const FiltersExample = Template.bind({});
FiltersExample.args = {
  options: [
    {
      label: 'Option 1',
      isSelected: false,
    },
    {
      label: 'Option 2',
      isSelected: false,
    },
    {
      label: 'Option 3',
      isSelected: false,
    },
    {
      label: 'Option 4',
      isSelected: false,
    },
  ]
};