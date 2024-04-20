import React, { useState } from 'react';
import { MultiselectOptions } from '../MultiselectOptions';
import { IMultiselect } from './types';
import './multiselect.css';



const Multiselect: React.FC<IMultiselect> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState(options);

  const toggleOption = (index: number) => {
    setSelectedOptions(selectedOptions.map((option, i) => i === index ? {...option, isSelected: !option.isSelected} : option));
  };

  return (
    <div className="multiselect__container">
      {selectedOptions.map((option, index) => (
        <div key={index} onClick={() => toggleOption(index)} className="multiselect-option">
          <MultiselectOptions label={option.label} isSelected={option.isSelected} setIsSelected={() => toggleOption(index)} />
        </div>
      ))}
    </div>
  );
};

export default Multiselect;