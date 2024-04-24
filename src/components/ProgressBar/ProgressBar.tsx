import React from 'react';
import { IProgressBar } from './types';
import './ProgressBar.css';
import classNames from 'classnames';

/**
 * A progress bar component that displays a progress bar with a label and a percentage value.
 * @param progress - The progress value of the progress bar.
 * @param color - The color of the progress bar. Can be 'green', 'yellow', or 'red'.
 * @param label - The label of the progress bar.
 * 
 * @example
 * <ProgressBar progress={50} color='green' label='Agent Name' />
 */
const ProgressBar: React.FC<IProgressBar> = ({ progress, color , label }) => {
    if (progress < 0 || progress > 100) throw new Error('Progress value must be between 0 and 100');
    if (!color){
        if (progress < 40) color = 'red';
        else if (progress < 80) color = 'yellow';
        else color = 'green';
    }

    const textColorClass = classNames({
        'text-aci-green': color === 'green',
        'text-aci-yellow': color === 'yellow',
        'text-aci-red': color === 'red',
    });

    const bgColorClass = classNames({
        'bg-aci-green': color === 'green',
        'bg-aci-yellow': color === 'yellow',
        'bg-aci-red': color === 'red',
    });

    const valueClasses = classNames(textColorClass, 'progress-bar__info__value');
    const progressClass = classNames(bgColorClass, 'progress-bar__bar--progress');


    return (
        <div className='progress-bar'>

            <div className="progress-bar__info">
                <span className="progress-bar__info__label" >{label}</span>
                <span className={valueClasses} >{progress}%</span>
            </div>
            <div className="progress-bar__bar">
                <div
                    className={progressClass}
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;