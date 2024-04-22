import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IProgressBar } from './types';

import classNames from 'classnames';

const ProgressBar: React.FC<IProgressBar> = ({ progress, color , label ,agentName }) => {
    const progressClasses = classNames({
        'bg-aci-green': color === 'green',
        'bg-yellow-400': color === 'yellow',
        'bg-red-600': color === 'red',
       
    });

    const progressLabel = label ? label : `${progress}%`;




    return (
        <div className=' w-full'>
            
            <div className="flex justify-between">
                <div className="text-black text-left" style={{fontSize: '90%'}}>{agentName}</div>
                <div className="text-aci-green text-right" style={{fontSize: '90%'}}>{progressLabel}</div>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-xl">
                <div
                    className={`h-full ${progressClasses} rounded-xl`}
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>
        </div>
    );
                };

export default ProgressBar;