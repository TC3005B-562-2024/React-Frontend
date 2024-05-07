import React, { useState } from 'react';
import { Button } from '../Button';
import { Multiselect } from '../Multiselect';
import { IFilters } from './types';

/**
 * A default Filters component that deploys Multiselect component.
 */
const Filters: React.FC<IFilters> = ({ options }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isMultiselectVisible, setIsMultiselectVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
    setIsMultiselectVisible(!isMultiselectVisible);
  };

  return (
    <div className='relative inline-block'>
      <Button
        onClick={handleButtonClick}
        text="Filter"
        color={isMultiselectVisible ? 'orange' : 'orange'}
        size="text"
        icon={{ iconName: 'instant_mix' }}
      />
      {isMultiselectVisible &&
        <div className='absolute right-0 mt-3'>
          <Multiselect options={options} />
        </div>
      }
    </div>
  );
};

export default Filters;
