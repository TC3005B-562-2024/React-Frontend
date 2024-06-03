import { useEffect, useState } from 'react';
import { IJointTrainingExpansionPanel, ITraning } from './types';
import { ProgressBar } from '../ProgressBar';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/types';

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

  const calculateAverage = (trainings: ITraning[]) => {
    return +(trainings.reduce((acc, training) => acc + training.progress, 0) / trainings.length).toFixed(2);
  };

  useEffect(() => {
    setAverage(calculateAverage(trainings));
  }, [trainings]);

  const rotateText = classNames('w-6 h-6 mx-2 text-black transition-transform duration-300 self-center',
    { '-rotate-270': isExpanded,
      '-rotate-90': !isExpanded
    }
  );

  return (
    <div className="w-full shadow-lg rounded-lg border-x-8 border-y-8 border-transparent">
      <button className="w-full " onClick={() => {
        setisExpanded(!isExpanded); // Toggle isExpanded state
      }}>
        <div className="flex justify-between items-center">
          <div className="text-title"> {label} </div>
          <div className="flex text-aci-green text-text font-bold text-right justify-end ">
            {average}%
            <div className={rotateText}>
              <Icon
                iconName={IconNames.ArrowForward}
                color='black'
              />
            </div>
          </div>
        </div>
      </button>
      {
        isExpanded && trainings.length !== 0 && trainings.map((training) => (
          <ProgressBar
            progress={training.progress}
            color={color}
            label={training.label}
            hasShadow={false}
          />
        ))
      }
    </div>
  );
}

export default MyJointTrainingExpansionPanel;
