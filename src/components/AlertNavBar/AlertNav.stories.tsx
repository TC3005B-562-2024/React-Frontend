import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AlertNav, { AlertNavProps } from './AlertNav';
import { Icon } from '../Icon';

export default {
  title: 'Components/AlertNav',
  component: AlertNav,
  argTypes: {
    instanceId: {
      control: 'text',
      defaultValue: '1',
    },
    alertsExists: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} as Meta;

const Template: StoryFn<AlertNavProps> = (args) => <AlertNav {...args} />;

export const AlertExists = Template.bind({});
AlertExists.args = {
  instanceId: '1',
  alertsExists: true,
};

export const NoAlertExists = Template.bind({});
NoAlertExists.args = {
  instanceId: '2',
  alertsExists: false,
};
