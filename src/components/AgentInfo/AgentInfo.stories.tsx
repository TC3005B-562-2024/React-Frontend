import { Meta, StoryFn } from '@storybook/react';
import { IAgentInfo } from './types';
import AgentInfo from './AgentInfo';
import { Icon } from '../Icon';

const meta = {
    title: 'Components/agentinfo',
    component: AgentInfo,
    parameters: {
        layout: 'centered',
        docs: {
            story: {
                inline: true,
                iframeHeight: 400,
            }
        },
    },
    argTypes: {
        color: {
            options: ['black', 'red', 'green', 'yellow', 'gray'],
            control: { type: 'select' },
        },
        title: { control: 'text' },
        content: { control: 'text' },
    },
    tags: ["autodocs"]
} as Meta;

export default meta;

const Template: StoryFn<IAgentInfo> = (args) => <AgentInfo {...args} />;

/**
 * An item subitem component to display a title and content.
 */
export const AgentInfoExample = Template.bind({});
AgentInfoExample.args = {
  AgentName: "Agent",
  Emotion : "Positive", // "?""
  skillArray: ["Soporte","Quejas"],
  Status: <Icon iconName="phone" color= "red"/>,
  topPriorityAlert:<Icon iconName="warning" color= "red"/>, // "?""
};