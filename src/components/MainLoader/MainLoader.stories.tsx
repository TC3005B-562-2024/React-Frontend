import type { Meta, StoryObj } from '@storybook/react';
import MainLoader from './MainLoader';

const meta = {
  title: 'Components/MainLoader',
  component: MainLoader,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * MainLoader for the page.
 */
export const MainLoaderExample: Story = {
};
