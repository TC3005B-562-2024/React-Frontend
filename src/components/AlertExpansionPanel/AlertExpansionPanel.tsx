import React, { useState } from 'react';
import classNames from 'classnames';
import AlertCard from '../AlertCard/AlertCard';
import { IAlertCardProps } from './types';
import './AlertExpansionPanel.css';

// Función auxiliar para obtener el texto adecuado según el nivel de alerta
const getAlertText = (priority: string) => {
  switch (priority) {
    case 'CRITIC':
      return 'Critic Alert';
    case 'MEDIUM':
      return 'Medium Alert';
    case 'LOW':
      return 'Low Alert';
    default:
      return 'Alert';
  }
};

const AlertExpansionPanel: React.FC<{ alerts: Array<IAlertCardProps> }> = ({ alerts }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePanelClick = () => {
    setExpanded(!expanded);
  };

  const priorityClass = classNames({
    'alert-card__container__color-box--high-priority': alerts.some(alert => alert.alertPriority === 'CRITIC'),
    'alert-card__container__color-box--medium-priority': alerts.some(alert => alert.alertPriority === 'MEDIUM'),
    'alert-card__container__color-box--low-priority': alerts.some(alert => alert.alertPriority === 'LOW'),
  });

  const panelClass = classNames('alert-expansion-panel', {
    'alert-expansion-panel--expanded': expanded,
  });

  return (
    <div className={panelClass}>
      <div
        className="alert-expansion-panel-header"
        onClick={handlePanelClick}
      >
        <div className="flex items-center h-20 mt-3"> {/* Contenedor flex para alinear el texto y el color */}
          {/* Barra de color */}
          <div className={`alert-expansion-panel-header__color-box ${priorityClass}`}></div>
          {/* Texto */}
          <h2 className="alert-expansion-panel-header-text">{getAlertText(alerts[0]?.alertPriority)}</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classNames('arrow-icon w-6 h-6 transition-transform duration-300', {
            'transform rotate-180': expanded,
          })}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.95a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 12.088l6.293-6.293a1 1 0 111.414 1.414l-7 7z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {expanded && (
        <div className="alert-expansion-panel-content">
          {alerts.map((alert, index) => (
            <AlertCard key={index} {...alert} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlertExpansionPanel;
