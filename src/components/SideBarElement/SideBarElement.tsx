import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ISideBarElement } from './types';
import { Icon } from '../Icon';
import './SideBarElement.css';
import classNames from "classnames";

/**
 * The SideBarElement component.
 */
const SideBarElement: React.FC<ISideBarElement> = ({ label, isSection = false, icon, path, isExpanded, ignoreIsSelected = false }) => {
  const isSelected = useLocation().pathname === path && !ignoreIsSelected;
  const containerClasses = classNames({
    'side-bar-element__container--unselected': !isSelected,
    'side-bar-element__container--selected': isSelected,
  });

  const contentClasses = classNames({
    'side-bar-element__container__label--unselcted': !isSelected,
    'side-bar-element__container__label--selcted': isSelected,
  });

  return (
    <Link to={path} className={containerClasses}>
      <div className='side-bar-element__container__content'>
        <div className='side-bar-element__container__icon'>
          <div className='side-bar-element__container__icon'>
            <Icon
              iconName={icon.iconName}
              color={isSelected ? 'orange' : 'white'}
            />
          </div>
        </div>
        {isExpanded &&
          <span className={contentClasses}>
            {label}
          </span>
        }
      </div>
      {isSection &&
        <hr />
      }
    </Link>
  );
};

export default SideBarElement;
