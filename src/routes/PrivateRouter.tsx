import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AlertNav, SideBar } from '../components';
import { ISkillBriefList } from '../services/skills/types';
import { getAllSkills } from '../services/skills/getAllSkills';

const PrivateRouter = () => {
  const [skillsReceived, setSkillsReceived] = useState<ISkillBriefList>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorSkills, setErrorSkills] = useState<boolean>(false);

  const getSkills = async () => {
    await getAllSkills()
    .then((res) => {
      setSkillsReceived(res);
    }) 
    .catch(() => {
      setErrorSkills(true);
    });
    setLoading(false);
  };
    
  useEffect(() => {
    setLoading(true);
    getSkills();
  }, []);
  
  return (

    <div className='flex'>
      <SideBar skills={skillsReceived}/>
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
