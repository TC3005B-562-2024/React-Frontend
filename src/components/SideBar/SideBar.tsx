import React, { useState } from 'react';
import { SideBarElement, Button } from '../../components';
import classNames from "classnames";
import './SideBard.css';
import { ROUTES } from '../../routes/constants';
import { ISideBar } from './types';
import { IIconNoColorNoSize } from '../Icon/types';
import { useAppContext } from '../../app-context/app-context';

const SideBar: React.FC<ISideBar> = ({ skills }) => {
  const [isExpanded, setExpanded] = useState(true);
  const { logOut } = useAppContext();

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
          icon={{ iconName: 'arrow_forward' }}
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
          <div id='skills' className='side-bar__container__elements__skills'>
            {skills !== undefined && skills.map((skill: { alias: string; iconName: string; id: string; }) => (
              <div className="side-bar__element">
                <SideBarElement
                  key={skill.id}
                  label={skill.alias}
                  icon={{ iconName: skill.iconName } as IIconNoColorNoSize}
                  path={`/skills/${skill.id}`}
                  isExpanded={isExpanded}

                />
              </div>
            ))}

            {skills === undefined &&
              <div className='side-bar__container__elements-container__upper-container__error-alert'>
                No Skills Found.
              </div>
            }
          </div>

        </div>
        <div className='side-bar__container__elements-container__lowe-container'>
          <SideBarElement
            label={ROUTES.AGENTS.name}
            isSection={true}
            icon={{ iconName: 'support_agent' }}
            path={ROUTES.AGENTS.path}
            isExpanded={isExpanded}
          />
          <SideBarElement
            label={ROUTES.LOG_OUT.name}
            isSection={true}
            icon={{ iconName: 'logout' }}
            onClick={logOut}
            isExpanded={isExpanded}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
