import React from 'react';
import { CheckIcon } from '@heroicons/react/solid'
import './multiselect-options.css';
import { IMultiselectOptions } from './types';

const MultiselectOptions: React.FC<IMultiselectOptions> = ({ label, isSelected, setIsSelected }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(event.target.checked);
  }

  return (
    <div className='multiselect-options__back-container'>
      <div className='multiselect-options__container'>
        <div className='multiselect-options__checkbox-container'>
          <input type="checkbox" className='multiselect-options__checkbox' checked={isSelected} onChange={(handleCheckboxChange)} />
          {isSelected && <CheckIcon className='multiselect-options__check-icon' />}
        </div>
        {label}
      </div>
    </div>
  );
};

export default MultiselectOptions;