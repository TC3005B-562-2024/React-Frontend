import React from 'react';
import classNames from 'classnames';
import './AlertCard.css';
import { Button } from '../Button';
import { IAlertCardProps } from './types';

/**
 * Card that shows important information of an alert.
 */
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
    'alert-card__container__color-box--high-priority': alertPriority === 'CRITIC',
    'alert-card__container__color-box--medium-priority': alertPriority === 'MEDIUM',
    'alert-card__container__color-box--low-priority': alertPriority === 'LOW',
  });

  return (
    <div className="alert-card__priority-contents">
      <div className={priorityClass}></div>
      <div className="alert-card__container__contents">
        <span className="alert-card__container__contents__name">
          {alertName}
        </span>
        <div className="alert-card__container__contents__lower-contents">
          <span className="alert-card__container__contents__owner-name">
            {alertOwner}
          </span>
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
