import React from 'react';
import { LoginForm, MainLoader } from '../../components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../app-context/app-context';

import './Login.css';

const Login: React.FC = () => {

  const [formStatus, setFormStatus] = useState<'default' | 'error'>('default');
  const [attemptsError, setAttemptsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login, loadingContext } = useAppContext();

  const resetFormStatus = () => {
    setFormStatus('default');
    setAttemptsError(false);
  } 

  const handleSignIn = async (email: string, password: string) => {
    try {
      await login(email, password);
      setFormStatus('default');
      setAttemptsError(false);
      navigate('/');
    } catch (error: any) {
      if (error.code === "auth/too-many-requests") {
        setAttemptsError(true);
      } else {
        setAttemptsError(false);
        setFormStatus('error');
      }
    }
  }

  if (loadingContext) {
    return <MainLoader/>
  }

  return (
    <div className='MainLoginComponent'>
      <LoginForm onSubmit={handleSignIn} status={formStatus} onInputChange={resetFormStatus} attemptsError={attemptsError} />
    </div>
  );
};

export default Login;
