import React, { useState } from 'react';
import MultiselectOptions from '../components/MultiselectOptions';
import { IMultiselect } from './types';

const initialOptions = [
  { label: 'Option 1', isSelected: false },
  { label: 'Option 2', isSelected: false },
  { label: 'Option 3', isSelected: false },
];

const OptionsList: React.FC = () => {
  const [options, setOptions] = useState(initialOptions);

  const toggleOption = (index: number) => {
    setOptions(options.map((option, i) => i === index ? {...option, isSelected: !option.isSelected} : option));
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} onClick={() => toggleOption(index)}>
          <MultiselectOptions label={option.label} isSelected={option.isSelected} />
        </div>
      ))}
    </div>
  );
};

export default OptionsList;