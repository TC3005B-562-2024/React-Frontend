import React, { useState } from 'react';
import { Button } from '../Button';
import { Multiselect } from '../Multiselect';
import { IFilters } from './types';
import { IMultiselectOptions } from '../MultiselectOptions/types';
import { IconNames } from '../Icon/types';

/**
 * A default Filters component that deploys Multiselect component.
 */
const Filters: React.FC<IFilters> = ({ options, onFilterChange }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isMultiselectVisible, setIsMultiselectVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
    setIsMultiselectVisible(!isMultiselectVisible);
  };

  const handleMultiselectChange = (newOptions: IMultiselectOptions[]) => {
    onFilterChange(newOptions);
  };
  
  return (
    <div className='relative inline-block' data-testid='filter-wrapper'>
      <Button
        onClick={handleButtonClick}
        text="Filter"
        color={isMultiselectVisible ? 'orange' : 'orange'}
        size="text"
        icon={{ iconName: IconNames.InstantMix }}
      />
      {isMultiselectVisible &&
        <div className='absolute right-0 mt-3' data-testid='filter-wrapper__multiselect'>
          <Multiselect options={options} onOptionChange={handleMultiselectChange} />
        </div>
      }
    </div>
  );
};

export default Filters;
