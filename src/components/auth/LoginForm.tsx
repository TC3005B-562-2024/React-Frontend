import React, { useState } from 'react';
import './LoginForm.css'
import Typography from '../Typography/Typography';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  }

  return (
    
    <div className="">
      <div className='  mb-2 text-center'><Typography type='section title' color='black' text='LOGIN' bold/></div>
      <div className='  mb-10 text-center flex'><Typography type='text' color='black' text='Sign in with your [yellow]Amazon Connect[/yellow] credentials'/></div>
      <div className=' px-6 '>
        <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className='mb-2 text-center'><Typography type='text' color='black' text='Email' bold/></div>
            
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>

          <div className="mb-11">
            <div className='mb-2 text-center'><Typography type='text' color='black' text='Password' bold/></div>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" required />
          </div>

          <div className="mb-6">
            <button type="submit">
              <Typography type='text' color='white' text='Login' bold/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;