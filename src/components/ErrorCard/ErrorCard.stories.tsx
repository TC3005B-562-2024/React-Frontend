import { Meta, StoryObj } from '@storybook/react';
import ErrorCard from './ErrorCard';

const meta = {
  title: 'Components/ErrorCard',
  component: ErrorCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ErrorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Error fetching training data',
  },
}
