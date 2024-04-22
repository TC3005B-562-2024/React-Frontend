import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AlertNav, { AlertNavProps } from './AlertNav';
import { Icon } from '../Icon';

/**
 * Component documentation for AlertNav.
 * 
 * This component displays an alert navigation bar.
 */
export default {
  title: 'Components/AlertNav',
  component: AlertNav,
  tags: ["autodocs"],
  argTypes: {
    /**
     * The unique identifier for the instance.
     */
    instanceId: {
      control: 'text',
      defaultValue: '1',
    },
    /**
     * Specifies whether alerts exist or not.
     */
    alertsExists: {
      control: 'boolean',
      defaultValue: true,
    },
    
  },
} as Meta;

/**
 * Template for the AlertNav component.
 * 
 * @param args - The props for the AlertNav component.
 */
const Template: StoryFn<AlertNavProps> = (args) => <AlertNav {...args} />;

/**
 * Example of AlertNav when alerts exist.
 */
export const AlertExists = Template.bind({});
AlertExists.args = {
  instanceId: '1',
  alertsExists: true,
};

/**
 * Example of AlertNav when no alerts exist.
 */
export const NoAlertExists = Template.bind({});
NoAlertExists.args = {
  instanceId: '2',
  alertsExists: false,
};
