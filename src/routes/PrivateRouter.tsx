import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AlertNav, SideBar } from '../components';
import { ISkillBrief } from '../services/skills/types';
import { getAllSkills } from '../services/skills/getAllSkills';

const PrivateRouter = () => {
  const [skillsReceived, setSkillsReceived] = useState<ISkillBrief[]>();
<<<<<<< HEAD
  const [loading, setLoading] = useState<boolean>(false);
  const [errorSkills, setErrorSkills] = useState<boolean>(false);
=======
  const [loading, setLoading] = useState<boolean>(true);
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
>>>>>>> origin/dev

  const getSkills = async () => {
    await getAllSkills()
    .then((res) => {
      setSkillsReceived(res);
    }) 
    .catch(() => {
      setErrorSkills(true);
    });
    setLoading(false);

    console.log(loading)
    console.log(errorSkills)
  };
    
  useEffect(() => {
<<<<<<< HEAD
    setLoading(true);
=======
>>>>>>> origin/dev
    getSkills();
  }, []);


  return (
    <>
      {loading && <div>Loading...</div>}
      {errorSkills && <div>Error</div>}
      {!loading && !errorSkills &&
        <div className='flex'>
          <SideBar skills={skillsReceived} />
          <div className='w-full h-lvh overflow-scroll'>
            <AlertNav instanceId={'ID'} alertsExists={true} />

<<<<<<< HEAD
    <div className='flex'>
      <SideBar skills={skillsReceived}/>
      <div className='w-full h-lvh overflow-scroll'>
        <AlertNav instanceId={'ID'} alertsExists={false}/>

      <div className='overflow-y-scroll mx-5 my-5 mr-5'>
        <Outlet />
      </div>
      </div>
    </div>
=======
            <div className='overflow-y-scroll mx-5 my-5 mr-5'>
              <Outlet />
            </div>
          </div>
        </div>
      }
    </>
>>>>>>> origin/dev
  );
};

export default PrivateRouter;
