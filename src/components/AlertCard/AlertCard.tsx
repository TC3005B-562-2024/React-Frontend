import React from 'react';
import './AlertCard.css';
import { Button } from '../Button';

export interface AlertCardProps {
  alertName: string;
  alertOwner: 'skillName' | 'queueName' | 'agentName';
  alertPriority: 'CRITIC' | 'MEDIUM' | 'LOW';
  individualAlertLink: string;
  alertId: number;
}

const AlertCard: React.FC<AlertCardProps> = ({
  alertName,
  alertOwner,
  alertPriority,
  individualAlertLink,
  alertId,
}) => {
  const handleViewMoreClick = () => {
    const fullAlertLink = `${individualAlertLink}${alertId}`;
    window.location.href = fullAlertLink;
    //alert('Has presionado un botón');
  };

  // Determinar la clase de prioridad dinámicamente según alertPriority
  let priorityClass = '';
  switch (alertPriority) {
    case 'CRITIC':
      priorityClass = 'high-priority';
      break;
    case 'MEDIUM':
      priorityClass = 'medium-priority';
      break;
    case 'LOW':
      priorityClass = 'low-priority';
      break;
    default:
      priorityClass = 'low-priority';
      break;
  }

  return (
    <div className={`alert-card h-25 bg-white p-1 rounded-lg shadow-md flex items-center justify-between max-w-sm`}>
      {/* Prioridad a la izquierda */}
      <div className={`priority-indicator ${priorityClass}`}></div>

      {/* Contenedor para alertName y alertOwner/Button */}
      <div className="alert-details flex-1 pl-5">
        {/* Div para alertName */}
        <div className="text-lg font-semibold text-gray-800 mb-2">{alertName}</div>
        {/* Div para alertOwner y Button */}
        <div className="flex flex-row items-center justify-between text-base text-gray-600">
          {/* Div para alertOwner */}
          <div>{alertOwner}</div>
          {/* Div para Button */}
          <div>
            <Button
              onClick={handleViewMoreClick}
              text="View More"
              color="orange"
              size="text"
              icon={{ iconName: 'arrow_right', filled: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
  