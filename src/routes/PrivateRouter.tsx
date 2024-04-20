import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components';

const PrivateRouter = () => {
  return (
    <div>
      <SideBar/>
      <Outlet/>
    </div>
  );
};

export default PrivateRouter;
