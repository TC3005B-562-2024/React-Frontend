import React from 'react';
import { Icon } from '../Icon';
import './AlertNav.css';
import { IAlertNav } from './types';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { IconNames } from '../Icon/types';

const AlertNav: React.FC<IAlertNav> = ({ instanceId, alertsExists }) => {
  const navigate = useNavigate();

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
      <button
        className={iconClasses}
        onClick={() => {
          navigate('/alerts')
        }}
      >

        <Icon
          iconName={IconNames.Warning}
          color={alertsExists ? "red" : "white"}
        />
      </button>
    </nav>
  );
};

export default AlertNav;
