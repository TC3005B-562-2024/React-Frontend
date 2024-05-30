import React, { useState, useEffect } from 'react';
import { IIndividualTrainingExpansionPanel } from './types';
import { Icon } from '../Icon';
import { TrainingCardToggle } from '../TrainingCardToggle';
import classNames from 'classnames';

/**
 * An individual training expansion panel component to display actions that include a check mark in case of being completed or incompleted.
 */
const IndividualTrainingExpansionPanel: React.FC<IIndividualTrainingExpansionPanel> = ({
  title,
  titleColor = 'black',
  trainings,
}) => {

  const [expanded, setExpanded] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const colorClasses = classNames({
    'text-black': titleColor === 'black',
    'text-aci-red': titleColor === 'red',
    'text-aci-green': titleColor === 'green',
  });

  const buttonClasses = classNames('transition duration-300', {
    'transition-transform -rotate-180': expanded,
  });

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (trainings && trainings.length > 0) {
      const completedTrainings = trainings.filter((training) => training.isComplete);
      const percentage = (completedTrainings.length / trainings.length) * 100;
      setCompletionPercentage(Math.round(percentage));
    } else {
      setCompletionPercentage(0);
    }
  }, [trainings]);

  return (
    <div data-testid="expansion-panel" className='bg-white h-10 box-content rounded-md shadow-md' data-porcentage={completionPercentage}>
      <div className='flex h-10'>
        <div className={`flex-1 grow font-bold mx-4 my-2`}><div className={colorClasses}>{title}</div></div>
        <div className={`text-aci-green font-semibold mx-2 mr-2 my-2`}>
          {completionPercentage + '%'}
        </div>
        <div className='mx-2 mr-4 my-2'>
          <button onClick={handleButtonClick} className={buttonClasses}>
            <Icon className='h-6' iconName='expand_less' color='black' />
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
                    label={training.label}
                    isComplete={training.isComplete}
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
