import React, { useState } from 'react';
import { SideBarElement, Button } from '../../components';
import classNames from "classnames";
import './SideBard.css';
import { ROUTES } from '../../routes/constants';
import { ISideBar } from './types';
import { IIconNoColorNoSize, IconNames } from '../Icon/types';
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
          key={'expand-button'}
          onClick={() => setExpanded(!isExpanded)}
          type='button'
          size='text'
          color='orange'
          icon={{ iconName: IconNames.ArrowForward }}
          hasShadow={false}
          isDisabled={false}
        />
      </div>

      <div className='side-bar__container__elements-container'>
        <div className='side-bar__container__elements-container__upper-container'>
          <SideBarElement
            key={'Dashboard'}
            label='Dashboard'
            icon={{ iconName: IconNames.Logo }}
            path='/'
            isExpanded={isExpanded}
            ignoreIsSelected={true}
          />

          <SideBarElement
            key={'Skills'}
            label='Skills'
            icon={{ iconName: IconNames.PhoneInTalk }}
            path='/'
            isSection={true}
            isExpanded={isExpanded}
            ignoreIsSelected={true}
          />

          <div className="side-bar__container__elements__skills">
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
          </div>

          {skills === undefined &&
            <div className='side-bar__container__elements-container__upper-container__error-alert'>
              No Skills Found.
            </div>
          }

        </div>
        <div className='side-bar__container__elements-container__lowe-container'>
        <SideBarElement
            key={ROUTES.PLOTS.name}
            label={ROUTES.PLOTS.name}
            isSection={true}
            icon={{ iconName: IconNames.BarChart }}
            path={ROUTES.PLOTS.path}
            isExpanded={isExpanded}
          />
          <SideBarElement
            key={ROUTES.LOGS.name}
            label={ROUTES.LOGS.name}
            isSection={true}
            icon={{ iconName: IconNames.History }}
            path={ROUTES.LOGS.path}
            isExpanded={isExpanded}
          />
          <SideBarElement
            key={ROUTES.LANDING.name}
            label={ROUTES.LANDING.name}
            isSection={true}
            icon={{ iconName: IconNames.SupportAgent }}
            path={ROUTES.LANDING.path}
            isExpanded={isExpanded}
          />
          <SideBarElement
            key={ROUTES.LOG_OUT.name}
            label={ROUTES.LOG_OUT.name}
            isSection={true}
            icon={{ iconName: IconNames.Logout }}
            onClick={logOut}
            isExpanded={isExpanded}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
