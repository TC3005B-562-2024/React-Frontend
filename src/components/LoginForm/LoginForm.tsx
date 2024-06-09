import React, { useState } from 'react';
import './LoginForm.css'
import { ILoginForm } from './types';
import InputField from '../InputField/InputField';

/**
 * Log in form component, for landing page.
 */
const LoginForm: React.FC<ILoginForm> = ({ status, onSubmit, onInputChange }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email: string) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    return emailRegex.test(email);
  };

  const handleInputChange = (id: string, value: string) => {
    if (id === 'email') {
      setEmail(value);
      setErrors((prev) => ({ ...prev, email: '' }));
    } else if (id === 'password') {
      setPassword(value);
      setErrors((prev) => ({ ...prev, password: '' }));
    }

    onInputChange();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'This field cannot be empty.';
      hasErrors = true;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format, please type a valid email.';
      hasErrors = true;
    }

    if (!password) {
      newErrors.password = 'This field cannot be empty.';
      hasErrors = true;
    }

    setErrors(newErrors);
    if (!hasErrors) {
      onSubmit(email, password);
    }
  }

  const inputColor = (field: 'email' | 'password') => {
    if (errors[field]) return 'red';
    return status === 'error' ? 'red' : 'orange';
  };

  return (
    <div data-testid="Login-Form" className='login-form__conatiner'>
      <div className='login-form__conatiner__header'>
        <p className='login-form__conatiner__header__title'>
          LOGIN
        </p>
        <span className='login-form__conatiner__header__subtitle'>
          Sign in with your
          <span className='login-form__conatiner__header__subtitle--yellow'> Amazon Connect </span>
          credentials
        </span>
      </div>
      <div className='login-form__conatiner__form-container'>
        <form
          className="login-form__conatiner__form-container-form"
          onSubmit={handleSubmit}>
          <InputField
            id='email'
            type='email'
            label='Email'
            labelPosition='center'
            helperText={errors.email}
            color={inputColor('email')}
            placeholder='Enter your email'
            required={false}
            onChange={handleInputChange}
          />
          <InputField
            id='password'
            type='secret'
            label='Password'
            labelPosition='center'
            helperText={errors.password || (errors.email ? '' : (status === 'default' ? '' : 'Invalid email or password, please try again.'))}
            color={(inputColor('password'))}
            placeholder='Enter your password'
            required={false}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className='login-form__conatiner__form-container-form__button'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
