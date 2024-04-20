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
 * A default multiselect component.
 */
export const MultiselectExample = Template.bind({});
MultiselectExample.args = {
  options: [
    {
      option: {
        label: 'Option 1',
        isSelected: false,
        setIsSelected: () => console.log('Option 1')
      }
    },
    {
      option: {
        label: 'Option 2',
        isSelected: false,
        setIsSelected: () => console.log('Option 1')
      }
    },
  ]
}
