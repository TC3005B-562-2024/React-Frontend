import { Meta, StoryFn } from '@storybook/react';
import { IIndividualTrainingExpansionPanel } from './types';
import IndividualTrainingExpansionPanel from './IndividualTrainingExpansionPanel';
import { TrainingCardToggle } from '../TrainingCardToggle';

const meta = {
    title: 'Components/IndividualTrainingExpansionPanel',
    component: IndividualTrainingExpansionPanel,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        title: {control: 'text'},
        titleColor: {
            options: ['black', 'red', 'green'],
            control: { type: 'select' },
        },
        trainings: {
            control: { type: 'object' },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof IndividualTrainingExpansionPanel>

export default meta;
const Template: StoryFn<IIndividualTrainingExpansionPanel> = (args) => <IndividualTrainingExpansionPanel {...args} />;

/**
 * An individual training expansion panel component to display actions that include a check mark in case of being completed or incompleted.
 */
export const Default = Template.bind({});
Default.args = {
    title: "Trainings of Agent John Doe",
    titleColor: "black",
    trainings: [
        {
            item: {
                label: "Training Description 1",
                completeButton: {
                    isComplete: false,
                    color: 'green',
                }
            }
        },
        {
            item: {
                label: "Training Description 2",
                completeButton: {
                    isComplete: false,
                    color: 'green',
                }
            }
        },
    ],
};
