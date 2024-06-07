import React, { useState, useEffect } from 'react';
import { Icon } from '../Icon';
import './multiselect-options.css';
import { IMultiselectOptions } from './types';
import { IconNames } from '../Icon/types';

/**
 * Component that stores the state of a given option.
 */
const MultiselectOptions: React.FC<IMultiselectOptions> = ({ label, isSelected, onChange }) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleOnChange = () => {
    onChange(label, !isSelected); // Pass label and new isSelected state
  };

  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);

  return (
    <div className='multiselect-options__container' key={label} >
      <div className='multiselect-options__container__checkbox-container'>
          <input
            key={label}
            type="checkbox"
            aria-label={label}
            className='multiselect-options__container__checkbox-container__checkbox'
            checked={isSelected}
            onChange={handleOnChange}
            data-testid='filter-wrapper__multiselect__options'
          />
        {isChecked && <Icon iconName={IconNames.Check} color='black' />}
      </div>
      <label htmlFor={label} className='multiselect-options__container__label'>
        {label}
      </label>
    </div>
  );
};

export default MultiselectOptions;
