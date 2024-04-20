import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {control: "text"},
    onSearch: fn(),
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Hola Mundo',
    onSearch: ()=>console.log('Hola Mundo'),
  },
};