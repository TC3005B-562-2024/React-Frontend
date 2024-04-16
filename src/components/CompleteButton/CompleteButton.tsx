import React from 'react';
import { ICompleteButton } from './types';
import { Icon } from '../Icon';

const CompleteButton: React.FC<ICompleteButton> = ({
    isComplete,
    color = 'green',
  }) => {
    return (
      <Icon iconName={isComplete ? 'check_circle' : 'radio_button_unchecked'} color={color} filled={isComplete} />
    );
  
  };
  
  export default CompleteButton;