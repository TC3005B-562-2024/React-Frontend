import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AlertExpansionPanel from './AlertExpansionPanel';
import { IAlertCard } from '../AlertCard/types';

// Define metadata for Storybook
const meta: Meta = {
    title: 'Components/AlertExpansionPanel',
    component: AlertExpansionPanel,
    parameters: {
      layout: 'padded', // Opcional: establece el diseño de las historias
      docs: {
        description: {
          component: 'Expansion panel that displays a list of alerts of the same category.',
        },
      },
    },
    argTypes: {
      alerts: { control: 'array' }, // Ejemplo de definición de propiedades
    },
    decorators: [], // Opcional: decoradores para envolver el componente
    tags: ["autodocs"], // Opcional: etiquetas adicionales para clasificar el componente
  };
export default meta;

// Template for stories
const Template: StoryFn<{ alerts: IAlertCard[] }> = (args) => (
  <AlertExpansionPanel {...args} />
);

// Alert data
const alerts: IAlertCard[] = [
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
export const CriticalAlerts: StoryFn<{ alerts: IAlertCard[] }> = Template.bind({});
CriticalAlerts.args = {
  alerts: alerts.filter(alert => alert.alertPriority === 'CRITIC'),
};

export const MediumAlerts: StoryFn<{ alerts: IAlertCard[] }> = Template.bind({});
MediumAlerts.args = {
  alerts: alerts.filter(alert => alert.alertPriority === 'MEDIUM'),
};

export const LowAlerts: StoryFn<{ alerts: IAlertCard[] }> = Template.bind({});
LowAlerts.args = {
  alerts: alerts.filter(alert => alert.alertPriority === 'LOW'),
};
