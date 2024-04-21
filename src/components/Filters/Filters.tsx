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
    <div>
       <Button
              onClick={handleButtonClick}
              text="Filter"
              color={isMultiselectVisible ? 'orange' : 'orange'}
              size="text"
              icon={{ iconName: 'instant_mix' }}
            />
      {isMultiselectVisible && <Multiselect className='multiselect__container mt-20' options={options} />}
    </div>
  );
};

export default Filters;