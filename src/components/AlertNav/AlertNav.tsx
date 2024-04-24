import React from 'react';
import { Icon } from '../Icon';
import './AlertNav.css';
import { IAlertNav } from './types';
import classNames from 'classnames';

const AlertNav: React.FC<IAlertNav> = ({ instanceId, alertsExists }) => {
  const iconClasses = classNames({
    'alert-nav__container__icon-container': true,
    'alert-nav__container__icon-container--bounce': alertsExists,
  });

  return (
    <nav className='alert-nav__container'>
      <div className='alert-nav__container__text-container'>
        <span className='alert-nav__container__text-container__instance'>
          INSTANCE:
        </span>
        <span className='alert-nav__container__text-container__instance-id'>
          {instanceId}
        </span>
      </div>
      <div className={iconClasses}>
        <Icon 
          iconName="warning" 
          color={alertsExists ? "red" : "white"} 
        />
      </div>
    </nav>
  );
};

export default AlertNav;
