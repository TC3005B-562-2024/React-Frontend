import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HistoryAgent from './HistoryAgent';
import { IHistoryAgentProps } from './types';

// Define metadata for Storybook
const meta: Meta = {
  title: 'Components/HistoryAgent',
  component: HistoryAgent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Component that displays history logs.',
      },
    },
  },
  decorators: [],
  tags: ["autodocs"],
};
export default meta;

// Template for stories
const Template: StoryFn<IHistoryAgentProps> = (args) => <HistoryAgent {...args} />;

// Stories with different data
export const AcceptedHistory: StoryFn<IHistoryAgentProps> = Template.bind({});
AcceptedHistory.args = {
  log: 'Log Entry 1',
  date: new Date(),
  icon: { iconName: 'check' },
  description: 'This entry was accepted.',
};

export const IgnoredHistory: StoryFn<IHistoryAgentProps> = Template.bind({});
IgnoredHistory.args = {
  log: 'Log Entry 2',
  date: new Date(),
  icon: { iconName: 'close' },
  description: 'This entry was ignored.',
};
