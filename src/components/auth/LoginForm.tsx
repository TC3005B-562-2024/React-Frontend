import React, { useState } from 'react';
import './LoginForm.css'
import Typography from '../Typography/Typography';
import { Icon } from '../Icon';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // Estado para controlar la visibilidad de la contraseña

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);  // Cambia el estado de visibilidad de la contraseña
  }

  return (
    <div>
      <div className='mb-2 text-center text-2xl font-bold'>LOGIN</div>
      <div className='mb-10 text-center text-base'>Sign in with your <span className='text-yellow-500'>Amazon Connect</span> credentials</div>
      <div className='px-6'>
        <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className='mb-2 text-center text-base font-bold'>Email</div>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>

          <div className="mb-11">
            <div className='mb-2 text-center text-base font-bold'>Password</div>
            <div className='flex'>
              <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
              <span className=' flex  justify-around items-center  '>
                <button type='button' onClick={togglePasswordVisibility} className='border-none cursor-pointer p-0  absolute mr-10  mt-2 '>
                  {showPassword ? <Icon iconName='Visibility' color='yellow' filled /> : <Icon iconName='Visibility_off' color='yellow' filled />}
                </button>
              </span>
            </div>
          </div>

          <div className="mb-6">
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
