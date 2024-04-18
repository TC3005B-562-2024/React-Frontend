import React, { useState } from 'react';
import { IMultiselectOptions } from './types';
import './MultiselectOptions.css';

const MultiselectOptions: React.FC<IMultiselectOptions> = ({ isSelected, label }) => {
  const [selectedOptions, setSelectedOptions] = useState({ option1: false, option2: false, option3: false });

  const handleCheckboxChange = (event: { target: { name: any; checked: any; }; }) => {
    setSelectedOptions({ ...selectedOptions, [event.target.name]: event.target.checked });
  }

  return (
    <div className="inline-block p-2 bg-white hover:bg-neutral-200">
      <label className="flex items-center justify-between">
        <input type="checkbox" name="option1" className="appearance-none bg-neutral-200 bg-check h-6 w-6 border-2 border-black rounded checked:bg-neutral-200 checked:border- focus:outline-none mr-2" checked={selectedOptions.option1} onChange={handleCheckboxChange} />
        {label}
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default MultiselectOptions;