import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AlertNav, SideBar } from '../components';

const PrivateRouter = () => {
  const [skills, setSkills] = useState([]);

  /*useEffect(() => {
    console.error('PrivateRouter.tsx: Missing getSkills() implementation');
    setSkills([]);
  }, [skills]);*/

  useEffect(() => {
    const fetchSkills = async () => {
      
      const fetchedSkills = await fetch('http://localhost:3000/skills') // TODO: Replace with actual endpoint
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.error('PrivateRouter.tsx: fetchSkills() failed', error);
          return [];
        });
      setSkills(fetchedSkills);
    }
    fetchSkills();
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
