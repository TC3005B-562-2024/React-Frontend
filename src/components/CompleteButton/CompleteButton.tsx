import React, { useState, useEffect } from 'react';
import { ICompleteButton } from './types';
import { Icon } from '../Icon';

const CompleteButton: React.FC<ICompleteButton> = ({
    color = 'green',
    isComplete = false,
}) => {
    
    const [completed, setCompleted] = useState(isComplete);

    const handleButtonClick = () => {
        setCompleted(!completed);
        isComplete == !isComplete;
    };

    useEffect(() => {
        setCompleted(isComplete);
    }, [isComplete]);

    return (
        <button onClick={handleButtonClick} className='flex'>
            <Icon iconName={completed ? 'check_circle_fill' : 'radio_button_unchecked'} color={color}/>
        </button>
    );
};

export default CompleteButton;
