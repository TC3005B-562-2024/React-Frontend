import React, { useState } from 'react';
import { IJointTrainingExpansionPanel } from './types';
import { ProgressBar } from '../ProgressBar';

/**
 * This component is used to display the training progress of agents in a queue or skill
 */
    const MyJointTrainingExpansionPanel: React.FC<IJointTrainingExpansionPanel> = ({ label, color, trainings }) => {
        const [isExpanded, setisExpanded] = useState<boolean>(false);
        const [average, setAverage] = useState<number>(0);
        const [rotate, setRotate] = useState(false);
        const html = [];

        
            if (trainings[0].length > 0) {
                
                const numberOfBars = trainings[0].length;
                let promedio = 0; 
                const rotateText = rotate ? 'w-6 h-6 text-black' : 'rotate-180 w-6 h-6 text-black';
                

                
                    for (let i = 0; i < numberOfBars; i++) {
                        promedio += parseInt(trainings[0][i]);
                    }
                    promedio = promedio / numberOfBars;
                    


                    html.push(
                        <button className="w-full " onClick={() => {
                            setisExpanded(!isExpanded); // Toggle isExpanded state
                            setRotate(!rotate); // Rotate arrow icon in button
                        }}>
                        <div className="flex justify-between">
                            <div className="text-title">
                             {label} </div>
                            <div className="flex text-aci-green text-right justify-end ">
                                {promedio}%
                                <svg id="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor" className={rotateText}><path strokeLinecap="round"
                                strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                            </div>
                                
                            

                            </div>
                        </button>
                    );
                    if (isExpanded) {
                        for (let i = 0; i < numberOfBars; i++) {
                            html.push(<ProgressBar progress={parseInt(trainings[0][i])} color={color} label={trainings[1][i]} />);
                        }
                    }
                }
                else{
                    html.push(
                        <div className="flex justify-between shadow-xl">
                            <div className="text-left text-aci-green">
                           Queue or Skill has no pending trainings. </div>
                        </div>
                    );
                }
        return (
            <div className="w-full shadow-xl shadow-gray-400 rounded-lg border-x-8 border-y-8 border-transparent">
                {html}
            </div>
        );
    }


export default MyJointTrainingExpansionPanel;

