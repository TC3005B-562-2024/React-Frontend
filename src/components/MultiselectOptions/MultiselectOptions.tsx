import React, { useState, useEffect } from 'react';
import { Icon } from '../Icon';
import './multiselect-options.css';
import { IMultiselectOptions } from './types';

/**
 * Component that stores the state of a given option.
 */
const MultiselectOptions: React.FC<IMultiselectOptions> = ({ label, isSelected }) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);

  return (
    <div className='multiselect-options__container'>
      <div className='multiselect-options__container__checkbox-container'>
        <input
          key={label}
          type="checkbox"
          className='multiselect-options__container__checkbox-container__checkbox'
          checked={isSelected}
          onChange={handleOnChange}
        />
        {isChecked && <Icon iconName='check' color='black' />}
      </div>
      <span className='multiselect-options__container__label'>
        {label}
      </span>
    </div>
  );
};

export default MultiselectOptions;
