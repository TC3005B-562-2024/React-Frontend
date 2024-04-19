import React, { useState } from 'react';
import './LoginForm.css'
import { ILoginForm } from './types';
import InputField from '../InputField/InputField';

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
    <div className='relative'>
      <div className='mb-2 text-center text-2xl font-bold'>LOGIN</div>
      <div className='mb-10 text-center text-base'>Sign in with your <span className='text-yellow-500'>Amazon Connect</span> credentials</div>
      <div className='px-6'>
        <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
          <InputField id='email' type='email' label='Email'  labelPosition='center' helperText='' color={inputColor} placeholder='Enter your email' onChange={handleInputChange}/>
          <InputField id='password' type='secret' label='Password' labelPosition='center' helperText='' color={inputColor} placeholder='Enter your password' onChange={handleInputChange}/>
          {status === 'error' && (
            <div className='absolute left-0 right-0 flex justify-center  items-center text-center mt-1'>
              <p className="text-red-500 whitespace-nowrap">Email or password incorrect. Please check and try again.</p>
            </div>
          )}
          <div className="mb-7">
            <div className='mb-2 text-center text-base font-bold'>ㅤ</div>
            <button type="submit" className='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
