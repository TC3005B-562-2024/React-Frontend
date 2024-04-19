import React, { useState } from 'react';
import { Icon } from '../Icon';
import classNames from "classnames";
import { IInputField } from './types';
import './InputField.css';

/**
 * Input Field component.
 */
const InputField: React.FC<IInputField & { onChange: (id: string, value: string) => void }> = ({ id, type, label,labelPosition, helperText, placeholder, color, onChange }) =>  {
  const inputClasses = classNames({
    'input-field__container__input-container__input': true,
    'input-field__container__input-container__input--black': color === 'black',
    'input-field__container__input-container__input--white': color === 'white',
    'input-field__container__input-container__input--red': color === 'red',
    'input-field__container__input-container__input--green': color === 'green',
    'input-field__container__input-container__input--blue': color === 'blue',
    'input-field__container__input-container__input--yellow': color === 'yellow',
    'input-field__container__input-container__input--gray': color === 'gray',
    'input-field__container__input-container__input--orange': color === 'orange',
  });

  const labelPositionClass = classNames({
    'input-field__container__title--center': labelPosition === 'center',
    'input-field__container__title--left': labelPosition === 'left',
    'input-field__container__title--right': labelPosition === 'right',
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
      <div className="input-field__container">
        <div className={labelPositionClass}>
          {label}
        </div>
        <div className='input-field__container__input-container'>
          <input 
            className={inputClasses} 
            type={showPassword ? "text" : "password"} 
            value={value} onChange={handleChange} 
            placeholder={placeholder} 
            required 
          />
          <div className='input-field__container__input-container__button-container'>
            <button 
              type='button' 
              onClick={togglePasswordVisibility} 
              className='input-field__container__input-container__button-container__button'>
              {showPassword ? <Icon iconName='visibility' color={color} /> : <Icon iconName='visibility_off' color={color} />}
            </button>
          </div>
        </div>
        {helperText !== '' && (
          <span className='input-field__container__helper-text'>
            {helperText}
          </span>
        )}
      </div>
    );      
  }else{
    return (
      <div className='input-field__container'>
        <div className={labelPositionClass}>
          {label}
        </div>
        <input 
          className={inputClasses} 
          type={type} value={ value } 
          onChange={handleChange} 
          placeholder={placeholder} 
          required 
        />
        {helperText !== '' && (
          <span className='input-field__container__helper-text'>
            {helperText}
          </span>
        )}
      </div>
    );
  }
}

export default InputField;
