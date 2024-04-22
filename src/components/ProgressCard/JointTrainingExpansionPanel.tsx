import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { IJointTrainingExpansionPanel } from './types';
import { ProgressBar } from '../ProgressBar';
import { Button } from '../Button';


    // ...

    const MyJointTrainingExpansionPanel: React.FC<IJointTrainingExpansionPanel> = ({ progress, color, agentName, trainings }) => {
        const textColor = 'aci-green-600';
        const [showBars, setShowBars] = useState(true); // Initialize showBars state to true
        trainings = [["50","60","70","80"], ["hola","Hola","Adios","Adios"]]
        const numberOfBars = trainings[0].length;
        const html = [];
        let promedio = 0;


        for (let i = 0; i < numberOfBars; i++) {
            promedio += parseInt(trainings[0][i]);
        }
        promedio = promedio / numberOfBars;
        


        html.push(
            <button className="w-full" onClick={() => {
                setShowBars(!showBars); // Toggle showBars state
            }}>
            <div className="flex justify-between">
                <div className="text-left">
                Trainings of Calls </div>
                <div className="text-aci-green text-right">{promedio}%</div>
                </div>
            </button>
        );
        if (showBars) {
            for (let i = 0; i < numberOfBars; i++) {
                html.push(<ProgressBar progress={parseInt(trainings[0][i])} color={color} label={trainings[1][i]} agentName={agentName} />);
            }
        }

        return (
            <div className="w-full">
                {html}
            </div>
        );
    }


export default MyJointTrainingExpansionPanel;

const JointTrainingExpansionPanel: Meta = {
    title: 'Components/Joint Training Expansion Panel',
    component: MyJointTrainingExpansionPanel,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};
