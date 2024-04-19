import React, { useState } from 'react';
import { Icon } from '../Icon';
import classNames from "classnames";
import { IInputField } from './types';
import './InputField.css';


const InputField: React.FC<IInputField & { onChange: (id: string, value: string) => void }> = ({ id, type, label,labelPosition, helperText, placeholder, color, onChange }) =>  {

  
  const classes = classNames({
    'border-black focus:border-black': color === 'black',
    'border-white focus:border-white': color === 'white',
    'border-red-500 focus:border-red-600': color === 'red',
    'border-green-500 focus:border-green-600': color === 'green',
    'border-blue-500 focus:border-blue-600': color === 'blue',
    'border-yellow-500 focus:border-yellow-600': color === 'yellow',
    'border-gray-500 focus:border-gray-600': color === 'gray',
    'border-orange-500 focus:border-orange-600': color === 'orange',
  });

  const labelPositionClass = classNames({
    'text-center': labelPosition === 'center',
    'text-left': labelPosition === 'left',
    'text-right': labelPosition === 'right',
  });

  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);  
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(id, value); 
  };

  if(type === 'secret'){
    return (
      <div className="mb-7">
        <div className={`mb-2 ${labelPositionClass} text-base font-bold`}>{label}</div>
        <div className='flex'>
          <input  className={classes} type={showPassword ? "text" : "password"} value={value} onChange={handleChange} placeholder={placeholder} required />
          <span className=' flex  justify-around items-center  '>
            <button type='button' onClick={togglePasswordVisibility} className='border-none cursor-pointer p-0  absolute mr-10  mt-2 '>
              {showPassword ? <Icon iconName='Visibility' color={color} filled /> : <Icon iconName='Visibility_off' color={color} filled />}
            </button>
          </span>
        </div>
        {helperText !== '' && (
            <div className='flex items-center text-center mt-1'>
              <p className="text-red-400 whitespace-nowrap">{helperText}</p>
            </div>
          )}
      </div>
    );      
  }else{
    return (
      <div className="mb-7">
        <div className={`mb-2 ${labelPositionClass} text-base font-bold`}>{label}</div>
        <input  className={classes} type={type} value={ value } onChange={handleChange} placeholder={placeholder} required />
        {helperText !== '' && (
            <div className='flex items-center text-center mt-1'>
              <p className="text-red-400 whitespace-nowrap">{helperText}</p>
            </div>
          )}
      </div>
    );
  }
  
}
export default InputField;
