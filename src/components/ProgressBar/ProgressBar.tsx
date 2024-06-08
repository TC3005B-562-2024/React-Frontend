import React from 'react';
import { IProgressBar } from './types';
import './ProgressBar.css'; // Make sure this file exists with your styles
import classNames from 'classnames';

const ProgressBar: React.FC<IProgressBar> = ({
    progress,
    color,
    label = "Progress", 
    hasShadow = true,
}) => {
    // Check for valid progress and return null if not valid
    if (typeof progress !== 'number' || isNaN(progress) || progress < 0 || progress > 100) {
        return null; 
    }

    const validColors = ['green', 'yellow', 'red'];
    if (!color || !validColors.includes(color)) {
        color = progress < 40 ? 'red' : progress < 80 ? 'yellow' : 'green';
    }

    const mainCardClasses = classNames('progress-bar', {
        'progress-bar--shadow': hasShadow,
    });

    return (
        <div data-testid="progress-bar-container" className={mainCardClasses}>
            <div className="progress-bar__info">
                {label && <span data-testid="progress-bar-label" className="progress-bar__info__label">{label}</span>}
                <span 
                    className={classNames('progress-bar__info__value', `text-aci-${color}`)}
                    data-testid="progress-bar-value"
                >
                    {progress}%
                </span>
            </div>
            <div className="progress-bar__bar" data-testid="progress-bar">
                <div
                    className={classNames('progress-bar__bar--progress', `bg-aci-${color}`)}
                    style={{ width: `${progress}%` }}
                    data-testid="progress-bar-fill" 
                />
            </div>
        </div>
    );
};

export default ProgressBar;