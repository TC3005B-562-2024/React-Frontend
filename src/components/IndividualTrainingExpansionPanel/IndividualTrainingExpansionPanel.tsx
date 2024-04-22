import React, { useState, useEffect } from 'react';
import { IIndividualTrainingExpansionPanel } from './types';
import { Icon } from '../Icon';
import { TrainingCardToggle } from '../TrainingCardToggle';
import { ITrainingCardToggle } from '../TrainingCardToggle/types';
import classNames from 'classnames';

const IndividualTrainingExpansionPanel: React.FC<IIndividualTrainingExpansionPanel> = ({
    title,
    titleColor = 'black',
    trainings,
}) => {

    const colorClasses = classNames({
        'text-black': titleColor === 'black',
        'text-red-600': titleColor === 'red',
        'text-aci-green': titleColor === 'green',
    });

    const [expanded, setExpanded] = useState(false);
    const [completionPercentage, setCompletionPercentage] = useState(0);

    const handleButtonClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        if (trainings && trainings.length > 0) {
            const completedTrainings = trainings.filter((training) => training.item.completeButton.isComplete);
            const percentage = (completedTrainings.length / trainings.length) * 100;
            setCompletionPercentage(Math.round(percentage));
        } else {
            setCompletionPercentage(0);
        }
    }, [trainings]);

    return (
        <div className='bg-white h-10 box-content rounded-md shadow-md'>
            <div className='flex'>
                <div className={`flex-1 grow font-bold mx-4 my-2`}><div className={colorClasses}>{title}</div></div>
                <div className={` text-aci-green font-semibold mx-2 mr-2 my-2`}>{completionPercentage}%</div>
                <div className='mx-2 mr-4 my-2'>
                    <button onClick={handleButtonClick} className={`${expanded ? 'transition ease-in-out transform rotate-180' : ''}`}>
                        <Icon iconName='expand_less' color='black' />
                    </button>
                </div>
            </div>
            {expanded && (
                <div className='bg-white box-content rounded-md shadow-md'>
                    <div className='flex flex-col'>
                        <div className='flex-1 grow justify-left'>
                            {trainings.map((training, index) => (
                                <div key={index}>
                                    <TrainingCardToggle
                                        key={index}
                                        {...training.item} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndividualTrainingExpansionPanel;
