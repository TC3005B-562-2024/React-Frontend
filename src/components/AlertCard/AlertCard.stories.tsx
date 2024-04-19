
import { Meta, StoryFn } from '@storybook/react';
import AlertCard from './AlertCard';
import { AlertCardProps } from "./AlertCard"

// Definición de metadatos y configuración para Storybook
const meta: Meta<AlertCardProps> = {
  title: 'Alert/AlertCard',
  component: AlertCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    alertName: { control: 'text' },
    alertOwner: {
      options: ['skillName', 'queueName', 'agentName'],
      control: { type: 'select' },
    },
    alertPriority: {
      options: ['CRITIC', 'MEDIUM', 'LOW'],
      control: { type: 'select' },
    },
    individualAlertLink: { control: 'text' },
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '3rem' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;

const Template: StoryFn<AlertCardProps> = (args) => <AlertCard {...args} />;
  
export const CriticalAlert = Template.bind({});
CriticalAlert.args = {
  alertName: 'Critical Alert',
  alertOwner: 'skillName',
  alertPriority: 'CRITIC',
  individualAlertLink: 'http://localhost:8080/alerts/', // Enlace base
  alertId: 1, // ID de la alerta para el botón "Ver más"
};

export const MediumAlert = Template.bind({});
MediumAlert.args = {
  alertName: 'Medium Alert',
  alertOwner: 'queueName',
  alertPriority: 'MEDIUM',
  individualAlertLink: 'http://localhost:8080/alerts/', // Enlace base
  alertId: 2, // ID de la alerta para el botón "Ver más"
};

export const LowAlert = Template.bind({});
LowAlert.args = {
  alertName: 'Low Alert',
  alertOwner: 'agentName',
  alertPriority: 'LOW',
  individualAlertLink: 'http://localhost:8080/alerts/', // Enlace base
  alertId: 3, // ID de la alerta para el botón "Ver más"
};