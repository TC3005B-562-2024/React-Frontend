
import { Meta, StoryObj } from '@storybook/react';
import AlertCard from './AlertCard';
import { IAlertCard } from "./types"
import { withRouter } from 'storybook-addon-react-router-v6';

// Definición de metadatos y configuración para Storybook
const meta: Meta<IAlertCard> = {
  title: 'Components/AlertCard',
  component: AlertCard,
  decorators: [withRouter],
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: true,
        iframeWidth: 400,
      }
    },
  },
  argTypes: {
    alertName: { control: 'text' },
    alertOwner: { control: 'text' },
    alertPriority: {
      options: ['CRITIC', 'MEDIUM', 'LOW'],
      control: { type: 'select' },
    },
    individualAlertLink: { control: 'text' },
  },
  tags: ["autodocs"]
} satisfies Meta<typeof AlertCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CriticalAlert: Story = {
  args: {
    alertName: 'Critical Alert',
    alertOwner: 'Owner Name',
    alertPriority: 'CRITIC',
    individualAlertLink: 'http://localhost:8080/alerts/', // Enlace base
    alertId: 1, // ID de la alerta para el botón "Ver más"
  },
};

export const MediumAlert: Story = {
  args: {
    alertName: 'Medium Alert',
    alertOwner: 'Owner Name',
    alertPriority: 'MEDIUM',
    individualAlertLink: 'http://localhost:8080/alerts/', // Enlace base
    alertId: 2, // ID de la alerta para el botón "Ver más"
  },
};

export const LowAlert: Story = {
  args: {
    alertName: 'Low Alert',
    alertOwner: 'Owner Name',
    alertPriority: 'LOW',
    individualAlertLink: 'http://localhost:8080/alerts/', // Enlace base
    alertId: 3, // ID de la alerta para el botón "Ver más"
  },
};
