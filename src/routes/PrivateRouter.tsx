import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components';

const PrivateRouter = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    console.error('PrivateRouter.tsx: Missing getSkills() implementation');
    setSkills([]);
  }, [skills]);
  
  return (
    <div>
      <SideBar skills={skills}/>
      <Outlet/>
    </div>
  );
};

export default PrivateRouter;
