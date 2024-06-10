import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ISideBarElement } from './types';
import { Icon } from '../Icon';
import './SideBarElement.css';
import classNames from "classnames";

/**
 * The SideBarElement component.
 */
const SideBarElement: React.FC<ISideBarElement> = ({ label, isSection = false, icon, path, onClick, isExpanded, ignoreIsSelected = false }) => {
  const isSelected = useLocation().pathname === path && !ignoreIsSelected;
  const containerClasses = classNames({
    'side-bar-element__container--unselected': !isSelected,
    'side-bar-element__container--selected': isSelected,
  });

  const contentClasses = classNames({
    'side-bar-element__container__label--unselcted': !isSelected,
    'side-bar-element__container__label--selcted': isSelected,
  });

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const renderContent = () => (
    <div className='side-bar-element__container__content' data-testid='side-bar-element__container__content'>
      <div className='side-bar-element__container__icon'>
        <Icon iconName={icon.iconName} color={isSelected ? 'orange' : 'white'} />
      </div>
      {isExpanded && 
        <span className={contentClasses} data-testid='side-bar-element__container__label'>
          {label}
        </span>
      }
    </div>
  );

  return path ? (
    <Link to={path} className={containerClasses} onClick={handleClick} data-testid={`side-bar-element-${label}`}>
      {renderContent()}
      {isSection && <hr />}
    </Link>
  ) : (
    <div className={containerClasses} onClick={handleClick} data-testid='side-bar-element__no-link'>
      {renderContent()}
      {isSection && <hr />}
    </div>
  );
};

export default SideBarElement;
