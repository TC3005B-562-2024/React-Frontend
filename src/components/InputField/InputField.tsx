import React, { useState } from 'react';
import { Icon } from '../Icon';
import classNames from "classnames";
import { IInputField } from './types';
import './InputField.css';
import { IconNames } from '../Icon/types';

/**
 * Input Field component.
 */
const InputField: React.FC<IInputField & { onChange: (id: string, value: string) => void }> = ({ id, type, label, labelPosition, helperText, placeholder, required, color, onChange }) => {
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

  return (
    <div className="input-field__container">
      <div className={labelPositionClass}>
        {label}
      </div>
      <div className='input-field__container__input-container'>
        <input
          className={inputClasses}
          type={type === 'secret' ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required = {required}
          data-testid={`input-${id}`}
        />
        {type === 'secret' && (
          <div className='input-field__container__input-container__button-container'>
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='input-field__container__input-container__button-container__button'>
              {showPassword ? <Icon className='h-5' iconName={IconNames.Visibility} color={color} /> : <Icon className='h-5' iconName={IconNames.VisibilityOff} color={color} />}
            </button>
          </div>
        )}
      </div>
      {helperText && (
        <span className='input-field__container__helper-text' data-testid="txt-error">
          {helperText}
        </span>
      )}
    </div>
  );
}

export default InputField;
