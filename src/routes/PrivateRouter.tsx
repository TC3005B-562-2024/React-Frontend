import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AlertNav, SideBar } from '../components';
import { ISideBarElement } from '../components/SideBarElement/types';

const PrivateRouter = () => {
  const [skills, setSkills] = useState<ISideBarElement[]>([]);

  const getSkills = async () => {
    // TODO: Fetch skills from API
    await new Promise(resolve => setTimeout(resolve, 500));
    setSkills([{ label: 'Skill', icon: { iconName: 'alarm', }, path: '', isExpanded: false }]);
  }

  useEffect(() => {
    getSkills();
  }, []); 

  
  return (

    <div className='flex'>
      <SideBar skills={skills}/>
      <div className='w-full h-lvh overflow-scroll'>
        <AlertNav instanceId={'ID'} alertsExists={false}/>

      <div className='overflow-y-scroll mx-5 my-5 mr-5'>
        <Outlet />
      </div>
      </div>
    </div>
  );
};

export default PrivateRouter;
