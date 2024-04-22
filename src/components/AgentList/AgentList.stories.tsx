import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AgentList from './AgentList';

export default {
  title: 'Components/AgentList',
  component: AgentList,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = () => <AgentList />;

export const Default = Template.bind({});
