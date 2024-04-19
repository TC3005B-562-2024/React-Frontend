import React from 'react';
import classNames from 'classnames';
import './Alert-Card.css';
import { Button } from '../Button';
import { IAlertCardProps } from './types';

const AlertCard: React.FC<IAlertCardProps> = ({
  alertName,
  alertOwner,
  alertPriority,
  individualAlertLink,
  alertId,
}) => {
  const handleViewMoreClick = () => {
    const fullAlertLink = `${individualAlertLink}${alertId}`;
    window.location.href = fullAlertLink;
  };

  // Determinar la clase de prioridad dinámicamente usando classNames
  const priorityClass = classNames({
    'high-priority': alertPriority === 'CRITIC',
    'medium-priority': alertPriority === 'MEDIUM',
    'low-priority': alertPriority === 'LOW' || !alertPriority,
  });

  return (
    <div className="alert-card__priority-contents">
      <div className={classNames('alert-card__container__color-box', priorityClass)}></div>
      <div className="alert-card__container__contents">
        <span className="alert-card__container__contents__name">{alertName}</span>
        <div className="alert-card__container__contents__lower-contents">
          <span className="alert-card__container__contents__agent">{alertOwner}</span>
          <div className="alert-card__container__contents__button">
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
