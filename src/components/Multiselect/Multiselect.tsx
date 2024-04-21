import React from 'react';
import { MultiselectOptions } from '../MultiselectOptions';
import { IMultiselect } from './types';
import './multiselect.css';

/**
 * A default multiselect component.
 */
const Multiselect: React.FC<IMultiselect> = ({ options }) => {
  return (
    <div className="multiselect__container">
      {options.map((option) => (
        <MultiselectOptions 
        label={option.label} 
        isSelected={option.isSelected}
        />
      ))}
    </div>
  );
};

export default Multiselect;