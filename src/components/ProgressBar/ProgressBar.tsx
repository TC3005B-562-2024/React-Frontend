import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IProgressBar } from './types';

import classNames from 'classnames';
/**
     * The current progress of the Progress Bar
     *  - Must be a number between 0 and 100
     * - Defaults to 0
     * - If the value is less than 0, it will be set to 0
     * - If the value is greater than 100, it will be set to 100
     * - If the value is not a number, it will be set to 0
     * - If the value is a float, it will be rounded to the nearest whole number
     * - If the value is NaN, it will be set to 0q
     * - If the value is Infinity, it will be set to 100
     * - If the value is -Infinity, it will be set to 0
     * - If the value is null, it will be set to 0
     * - Default color should be green
     ***/
const ProgressBar: React.FC<IProgressBar> = ({ progress, color, rounded , label ,agentName }) => {
    const progressClasses = classNames({
        'bg-green-500': color === 'green',
        'bg-yellow-400': color === 'yellow',
        'bg-red-600': color === 'red',
       
    });

    const progressLabel = label ? label : `${progress}%`;

    const progressRounded = rounded ? 'rounded' : '';



    return (
        <div className=' w-full'>
            
            <div className="flex justify-between">
                <div className="text-black text-left" style={{fontSize: '90%'}}>{agentName}</div>
                <div className="text-black text-right" style={{fontSize: '90%',color: color}}>{progressLabel}</div>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded">
                <div
                    className={`h-full ${progressClasses} ${progressRounded}`}
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>
        </div>
    );
                };

export default ProgressBar;