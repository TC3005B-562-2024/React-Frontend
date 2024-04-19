import { Meta, StoryFn } from '@storybook/react';
import { IErrorCard } from './types';
import ErrorCard from './ErrorCard';

export default {
    title: 'Components/ErrorCard',
    component: ErrorCard,
  } as Meta;
  
  const Template: StoryFn<IErrorCard> = (args) => <ErrorCard {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    title: 'Error fetching training data',
  };