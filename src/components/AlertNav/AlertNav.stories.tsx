import { Meta, StoryFn } from '@storybook/react';
import AlertNav from './AlertNav';
import { IAlertNav } from './types';
import { withRouter } from 'storybook-addon-react-router-v6';

/**
 * This component displays an alert navigation bar.
 */
export default {
  title: 'Components/AlertNav',
  component: AlertNav,
  decorators: [withRouter],
  tags: ["autodocs"],
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

const Template: StoryFn<IAlertNav> = (args) => <AlertNav {...args} />;

/**
 * Example of AlertNav when alerts exist.
 */
export const AlertExists = Template.bind({});
AlertExists.args = {
  instanceId: '1abshd',
  alertsExists: true,
};

/**
 * Example of AlertNav when no alerts exist.
 */
export const NoAlertExists = Template.bind({});
NoAlertExists.args = {
  instanceId: 'aad24',
  alertsExists: false,
};
