import React from 'react';
import { Icon } from '..'; 
import './multiselect-options.css';
import { IMultiselectOptions } from './types';

const MultiselectOptions: React.FC<IMultiselectOptions> = ({ label, isSelected, setIsSelected }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(event.target.checked);
  }

  const handleContainerClick = () => {
    setIsSelected(!isSelected);
    isSelected = !isSelected;
  }

  return (
    <button className='multiselect-options__back-container' onClick={handleContainerClick}>
      <div className='multiselect-options__container'>
        <div className='multiselect-options__checkbox-container'>
          <input type="checkbox" className='multiselect-options__checkbox' checked={isSelected} onChange={(handleCheckboxChange)} />
          {isSelected && <Icon iconName='check_circle' color='black' />}
        </div>
        {label}
      </div>
    </button>
  );
};

export default MultiselectOptions;