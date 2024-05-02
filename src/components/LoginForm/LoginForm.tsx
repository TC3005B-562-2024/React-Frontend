import React, { useState } from 'react';
import './LoginForm.css'
import { ILoginForm } from './types';
import InputField from '../InputField/InputField';

/**
 * Log in form component, for landing page.
 */
const LoginForm: React.FC<ILoginForm> = ({ status }) => {

  const inputColor = status === 'error' ? 'red' : 'yellow';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (id: string, value: string) => {
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  }

  return (
    <div className='login-form__conatiner'>
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
            helperText='' 
            color={inputColor} 
            placeholder='Enter your email' 
            onChange={handleInputChange}
          />
          <InputField 
            id='password' 
            type='secret' 
            label='Password' 
            labelPosition='center' 
            helperText={status === 'default' ? '': 'Invalid password or email.'}
            color={inputColor} 
            placeholder='Enter your password' 
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
