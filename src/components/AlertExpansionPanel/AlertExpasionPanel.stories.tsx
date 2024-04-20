import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AlertExpansionPanel from './AlertExpansionPanel';
import { IAlertCardProps } from './types';

// Define metadata for Storybook
const meta: Meta = {
  title: 'Components/AlertExpansionPanel',
  component: AlertExpansionPanel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Expansion panel that displays a list of alerts of the same category.',
      },
    },
  },
};

export default meta;

// Template for stories
const Template: StoryFn<{ alerts: IAlertCardProps[] }> = (args) => (
  <AlertExpansionPanel {...args} />
);

// Alert data
const alerts: IAlertCardProps[] = [
  {
    alertName: 'Critical Alert 1',
    alertOwner: 'Owner Name',
    alertPriority: 'CRITIC',
    individualAlertLink: 'http://localhost:8080/alerts/',
    alertId: 1,
  },
  {
    alertName: 'Critical Alert 2',
    alertOwner: 'Owner Name',
    alertPriority: 'CRITIC',
    individualAlertLink: 'http://localhost:8080/alerts/',
    alertId: 2,
  },
  {
    alertName: 'Critical Alert 3',
    alertOwner: 'Owner Name',
    alertPriority: 'MEDIUM',
    individualAlertLink: 'http://localhost:8080/alerts/',
    alertId: 3,
  },
  {
    alertName: 'Critical Alert 4',
    alertOwner: 'Owner Name',
    alertPriority: 'LOW',
    individualAlertLink: 'http://localhost:8080/alerts/',
    alertId: 4,
  },
];

// Stories for different priorities
export const CriticalAlerts: StoryFn<{ alerts: IAlertCardProps[] }> = Template.bind({});
CriticalAlerts.args = {
  alerts: alerts.filter(alert => alert.alertPriority === 'CRITIC'),
};

export const MediumAlerts: StoryFn<{ alerts: IAlertCardProps[] }> = Template.bind({});
MediumAlerts.args = {
  alerts: alerts.filter(alert => alert.alertPriority === 'MEDIUM'),
};

export const LowAlerts: StoryFn<{ alerts: IAlertCardProps[] }> = Template.bind({});
LowAlerts.args = {
  alerts: alerts.filter(alert => alert.alertPriority === 'LOW'),
};
