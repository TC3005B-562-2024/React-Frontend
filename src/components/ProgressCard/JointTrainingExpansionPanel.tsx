import { useEffect, useState } from 'react';
import { IJointTrainingExpansionPanel } from './types';
import { ProgressBar } from '../ProgressBar';

/**
 * This component is used to display the training progress of agents in a queue or skill.
 * It's assumed that the trainings has data, if not, the component should't be called to be
 * rendered at the parent component.
 */
const MyJointTrainingExpansionPanel: React.FC<IJointTrainingExpansionPanel> = (
    { label, color, trainings }
) => {
    const [isExpanded, setisExpanded] = useState<boolean>(false);
    const [average, setAverage] = useState<number>(0);

    const calculateAverage = () => {
        return 0;
    };

    useEffect(() => {
        setAverage(calculateAverage());
    }, [trainings]);

    const rotateText = isExpanded ? 'w-6 h-6 text-black' : 'rotate-180 w-6 h-6 text-black';

    return (
        <div className="w-full shadow-xl shadow-gray-400 rounded-lg border-x-8 border-y-8 border-transparent">
            <button className="w-full " onClick={() => {
                setisExpanded(!isExpanded); // Toggle isExpanded state
            }}>
                <div className="flex justify-between">
                    <div className="text-title">
                        {label} </div>
                    <div className="flex text-aci-green text-right justify-end ">
                        {average}%
                        <svg id="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className={rotateText}><path strokeLinecap="round"
                                strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                    </div>



                </div>
            </button>
            {
                isExpanded && Array.from({ length: trainings[0].length }).map((_, i) => (
                    <ProgressBar
                        progress={parseInt(trainings[0][i])}
                        color={color}
                        label={trainings[1][i]}
                        hasShadow={false}
                    />
                ))
            }
        </div>
    );
}


export default MyJointTrainingExpansionPanel;

