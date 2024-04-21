import React, { useState } from 'react';
import { SideBarElement, Button } from '../../components';
import classNames from "classnames";
import './SideBard.css';
import { ROUTES } from '../../routes/constants';
import { ISideBar } from './types';

const SideBar: React.FC<ISideBar> = ({ skills }) => {
  const [isExpanded, setExpanded] = useState(true);

  const containerClasses = classNames({
    'side-bar__container': true,
    'side-bar__container--expaned': isExpanded,
    'side-bar__container--unexpaned': !isExpanded,
  });

  const buttonClasses = classNames({
    'side-bar__container__expand-button': true,
    'side-bar__container__expand-button--unexpaned': !isExpanded,
  });

  return (
    <div className={containerClasses}>
      <div className={buttonClasses}>
        <Button
          onClick={() => setExpanded(!isExpanded)}
          type='button'
          size='text'
          color='orange'
          icon={{iconName: 'arrow_forward' }}
          hasShadow={false}
          isDisabled={false}
        />
      </div>

      <div className='side-bar__container__elements-container'>
        <div className='side-bar__container__elements-container__upper-container'>
          <SideBarElement 
            label='Dashboard'
            icon={{ iconName: 'logo' }}
            path='/'
            isExpanded={isExpanded}
            ignoreIsSelected={true}
          />

          <SideBarElement 
            label='Skills'
            icon={{ iconName: 'phone_in_talk' }}
            path='/'
            isSection={true}
            isExpanded={isExpanded}
            ignoreIsSelected={true}
          />

          {skills.map((skill) => (
            <SideBarElement 
              label={skill.label}
              icon={skill.icon}
              path={skill.path}
              isExpanded={isExpanded}
            />
          ))}
        </div>
        <div className='side-bar__container__elements-container__lowe-container'>
          <SideBarElement 
            label={ROUTES.AGENT.name}
            isSection={true}
            icon={{ iconName: 'support_agent' }}
            path={ROUTES.AGENT.path}
            isExpanded={isExpanded}
          />
          <SideBarElement 
            label={ROUTES.LOG_OUT.name}
            isSection={true}
            icon={{ iconName: 'logout' }}
            path={ROUTES.LOG_OUT.path}
            isExpanded={isExpanded}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
