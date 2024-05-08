import React from 'react';
import { LoginForm } from '../../components';
import './Login.css';

const Login: React.FC = () => {

  return (
    <div className='MainLoginComponent'>
      <LoginForm status='default' />
    </div>
  );
};

export default Login;
