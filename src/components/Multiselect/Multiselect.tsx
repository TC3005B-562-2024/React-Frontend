import React from 'react';
import { MultiselectOptions } from '../MultiselectOptions';
import { IMultiselect } from './types';
import './Multiselect.css';

/**
 * A default multiselect component.
 */
const Multiselect: React.FC<IMultiselect> = ({ options, onOptionChange }) => {
  const [selectedOptions, setSelectedOptions] = React.useState(options);

  const handleOptionChange = (index: number) => {
    const newOptions = [...selectedOptions];
    newOptions[index].isSelected = !newOptions[index].isSelected;
    setSelectedOptions(newOptions);
    onOptionChange(newOptions);
  };
  return (
    <div className="multiselect__container">
      {selectedOptions.map((option, index) => (
        <MultiselectOptions
          label={option.label}
          isSelected={option.isSelected}
          onChange={() => handleOptionChange(index)}
          key={option.label}
        />
      ))}
    </div>
  );
};

export default Multiselect;
