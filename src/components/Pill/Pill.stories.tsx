import type { Meta, StoryObj } from '@storybook/react';
import Pill from './Pill';

const meta = {
  title: 'Components/Button',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    color: {
        options: ['black', 'white', 'red', 'green', 'blue', 'yellow', 'gray', 'orange'],
        control: { type: 'select' },
    },
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Hola Mundo',
    color: 'orange',
  },
};
