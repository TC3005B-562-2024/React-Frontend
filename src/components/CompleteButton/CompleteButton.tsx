import React, { useState, useEffect } from 'react';
import { ICompleteButton } from './types';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/types';

const CompleteButton: React.FC<ICompleteButton> = ({
    color = 'green',
    isComplete = false,
}) => {

    const [completed, setCompleted] = useState(isComplete);

    const handleButtonClick = () => {
        setCompleted(!completed);
    };

    useEffect(() => {
        setCompleted(isComplete);
    }, [isComplete]);

    return (
        <button data-testid="complete-button" onClick={handleButtonClick} className='h-5 w-5' data-completed={completed}>
            <Icon iconName={completed ? IconNames.CheckCircleFill : IconNames.RadioButtonUnchecked} color={color} data-icon-name={completed ? 'check_circle_fill' : 'radio_button_unchecked'} />
        </button>
    );
};

export default CompleteButton;
