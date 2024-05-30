import React from 'react';
import { LoginForm, MainLoader } from '../../components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../app-context/app-context';

import './Login.css';

const Login: React.FC = () => {

  const [formStatus, setFormStatus] = useState<'default' | 'error'>('default');
  const navigate = useNavigate();
  const { login, loadingContext } = useAppContext();

  const handleSignIn = async (email: string, password: string) => {
    try {
      await login(email, password);
      setFormStatus('default');
      navigate('/');
    } catch (error) {
      setFormStatus('error');
    }
  }

  if (loadingContext) {
    return <MainLoader/>
  }

  return (
    <div className='MainLoginComponent'>
      <LoginForm onSubmit={handleSignIn} status={formStatus} />
    </div>
  );
};

export default Login;
