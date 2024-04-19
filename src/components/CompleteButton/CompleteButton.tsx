import React, { useState, useEffect } from 'react';
import { ICompleteButton } from './types';
import { Icon } from '../Icon';

const CompleteButton: React.FC<ICompleteButton> = ({
    color = 'green',
    isComplete: isCompleteProp,
    onToggleComplete,
}) => {
    const [isComplete, setIsComplete] = useState(isCompleteProp || false);

    useEffect(() => {
        setIsComplete(isCompleteProp || false);
    }, [isCompleteProp]);

    const handleButtonClick = () => {
        const newValue = !isComplete;
        setIsComplete(newValue);
        if (onToggleComplete) {
            onToggleComplete(newValue);
        }
    };

    return (
        <button onClick={handleButtonClick} className='flex'>
            <Icon iconName={isComplete ? 'check_circle' : 'radio_button_unchecked'} color={color} filled={isComplete} />
        </button>
    );
};

export default CompleteButton;
