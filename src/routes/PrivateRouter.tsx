import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AlertNav, SideBar } from '../components';

const PrivateRouter = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    console.error('PrivateRouter.tsx: Missing getSkills() implementation');
    setSkills([]);
  }, [skills]);
  
  return (
    <div className='flex'>
      <SideBar skills={skills}/>
      <div className=' w-full'>
      <AlertNav instanceId={'ID'} alertsExists={false}/>
      <Outlet />
      </div>

    </div>
  );
};

export default PrivateRouter;
