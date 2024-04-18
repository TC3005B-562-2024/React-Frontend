import React from 'react';
import classNames from 'classnames';
import './AlertCard.css'; 
import { Button } from '../Button';

export interface AlertCardProps {
  alertName: string;
  alertOwner: 'skillName' | 'queueName' | 'agentName';
  alertPriority: 'CRITIC' | 'MEDIUM' | 'LOW';
  individualAlertLink: string;
}

const AlertCard: React.FC<AlertCardProps> = ({
  alertName,
  alertOwner,
  alertPriority,
}) => {
  const priorityColorClass = classNames({
    'priority-circle': true,
    'critical': alertPriority === 'CRITIC',
    'medium': alertPriority === 'MEDIUM',
    'low': alertPriority === 'LOW',
  });

  const handleViewMoreClick = () => {
    alert("Has presionado un boton")
  };

  return (
    <div className="container">
      <div className="alert-card">
        <div className={priorityColorClass}>{alertPriority}</div>
        <div className="info-container">
        <div className="alert-info">
          <div className="alert-name">{alertName}</div>
          <div className="agent-name">{alertOwner}</div>
      </div>
        <div className="button-container">
          <Button
            onClick={handleViewMoreClick}
            text="Ver más"
            color="orange"
            size="text"
            icon={{ iconName: 'arrow_right', filled: true }} // Ejemplo de icono de flecha hacia la derecha
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AlertCard;
