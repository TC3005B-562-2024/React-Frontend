import React, { useState } from 'react';
import classNames from 'classnames';
import AlertCard from '../AlertCard/AlertCard';
import { IAlertExpansionPanel } from './types';
import './AlertExpansionPanel.css';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/types';


/**
 * AlertExpansionPanel component displays a list of alerts in an expansion panel.
 */
const AlertExpansionPanel: React.FC<IAlertExpansionPanel> = ({ alerts }) => {

  const getAlertText = (alertPriority: string) => {
    return alertPriority.charAt(0).toUpperCase() + alertPriority.slice(1).toLowerCase();
  };

  const [expanded, setExpanded] = useState(false);

  const handlePanelClick = () => {
    setExpanded(!expanded);
  };

  const priorityClass = classNames({
    'alert-expansion-panel__container__header__contents__color-box': true,
    'alert-expansion-panel__container__header__contents__color-box--high-priority': alerts.some(alert => alert.alertPriority === 'CRITIC'),
    'alert-expansion-panel__container__header__contents__color-box--medium-priority': alerts.some(alert => alert.alertPriority === 'MEDIUM'),
    'alert-expansion-panel__container__header__contents__color-box--low-priority': alerts.some(alert => alert.alertPriority === 'LOW'),
  });

  const arrowIconClasses = classNames(
    'alert-expansion-panel__container__header__arrow-icon', {
    'alert-expansion-panel__container__header__arrow-icon--expanded': expanded,
  });

  return (
    <div className='alert-expansion-panel__container'>
      <div className="alert-expansion-panel__container__header" onClick={handlePanelClick} data-testid="alert-expansion-panel-expand-button">
        {/* Contenedor flex para alinear el texto y el color */}
        <div className="alert-expansion-panel__container__header__contents">
          {/* Barra de color */}
          <div className={priorityClass}></div>
          {/* Texto */}
          <span className="alert-expansion-panel__container__header__contents__text" data-testid="alert-expansion-panel-alert-priority-text">
            {getAlertText(alerts[0]?.alertPriority)}
          </span>
        </div>
        <div className={arrowIconClasses}>
          <Icon
            iconName={IconNames.ArrowForward}
            color='black'
          />
        </div>
      </div>
      {expanded && (
        <div className="alert-expansion-panel__container__cards-container">
          {alerts.map((alert) => (
            <AlertCard
              key={alert.alertId}
              alertName={alert.alertName}
              alertOwner={alert.alertOwner}
              alertPriority={alert.alertPriority}
              individualAlertLink={alert.individualAlertLink}
              alertId={alert.alertId}
              hasShadow={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlertExpansionPanel;
