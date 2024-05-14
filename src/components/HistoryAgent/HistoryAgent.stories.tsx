import { StoryFn, Meta } from '@storybook/react';
import HistoryAgent from './HistoryAgent';

const meta = {
  title: 'Components/HistoryAgent',
  component: HistoryAgent,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HistoryAgent>;

export default meta;

const Template: StoryFn = () => <HistoryAgent />;

export const HistoryAgentExample = Template.bind({});
