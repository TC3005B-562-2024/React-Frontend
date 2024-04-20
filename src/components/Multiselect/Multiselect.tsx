import React, { useState } from 'react';
import { MultiselectOptions } from '../MultiselectOptions';
import { IMultiselect } from './types';
import './multiselect.css';



const Multiselect: React.FC<IMultiselect> = ({ label, isSelected, setIsSelected }) => {


  const [options, setOptions] = useState(initialOptions);

  const toggleOption = (index: number, newLabel: string) => {
    setOptions(options.map((option, i) => i === index ? {...option, isSelected: !option.isSelected, label: newLabel} : option));
  };

  return (
    <div className="multiselect__container">
      {options.map((option, index) => (
        <div key={index} onClick={() => toggleOption(index, option.label)} className="multiselect-option">
          <MultiselectOptions label={option.label} isSelected={option.isSelected} setIsSelected={() => toggleOption(index, option.label)} />
        </div>
      ))}
    </div>
  );
};

export default Multiselect;