
import { Meta, StoryFn } from '@storybook/react';
import AlertCard from './AlertCard';
import { AlertCardProps } from "./AlertCard"

export default {
  title: 'Alert/AlertCard',
  component: AlertCard,
} as Meta;

const Template: StoryFn<AlertCardProps> = (args) => <AlertCard {...args} />;

export const CriticalAlert = Template.bind({});
CriticalAlert.args = {
  alertName: 'Critical Alert',
  alertOwner: 'skillName',
  alertPriority: 'CRITIC',
};

export const MediumAlert = Template.bind({});
MediumAlert.args = {
  alertName: 'Medium Alert',
  alertOwner: 'queueName',
  alertPriority: 'MEDIUM',
};

export const LowAlert = Template.bind({});
LowAlert.args = {
  alertName: 'Low Alert',
  alertOwner: 'agentName',
  alertPriority: 'LOW',
};



