import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AlertNav, SideBar } from '../components';

const PrivateRouter = () => {
  const [skills, setSkills] = useState([]);


  return (

    <div className='flex '>
      <SideBar skills={skills}/>
      <div className=' w-full h-lvh overflow-scroll'>
        <AlertNav instanceId={'ID'} alertsExists={false}/>

      <div className='overflow-y-scroll mx-5 my-5 mr-5'>
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default PrivateRouter;
