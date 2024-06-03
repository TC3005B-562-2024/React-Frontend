import React from 'react';
import classNames from 'classnames';
import './AlertCard.css';
import { Button } from '../Button';
import { IAlertCard } from './types';
import { useNavigate } from 'react-router-dom';
import { IconNames } from '../Icon/types';

/**
 * Card that shows important information of an alert.
 */
const AlertCard: React.FC<IAlertCard> = ({
  alertName,
  alertOwner,
  alertPriority,
  individualAlertLink,
  hasShadow = true,
}) => {
  const navigate = useNavigate();
  const shortId = (id: string) => {
    if (id.length <= 12) {
      return id;
    } else {
      return `${id.substring(0, 12)}...${id.slice(-8)}`;
    }
  }


  const handleViewMoreClick = () => {
    navigate('/alerts/' + individualAlertLink);
  };

  // Determinar la clase de prioridad dinámicamente usando classNames
  const priorityClass = classNames({
    'alert-card__container__color-box--high-priority': alertPriority === 'CRITIC',
    'alert-card__container__color-box--medium-priority': alertPriority === 'MEDIUM',
    'alert-card__container__color-box--low-priority': alertPriority === 'LOW',
  });

  const mainCardClasses = classNames({
    'alert-card__priority-contents': true,
    'alert-card__priority-contents--shadow': hasShadow,
  });

  return (
    <div className={mainCardClasses}>
      <div className={priorityClass}></div>
      <div className="alert-card__container__contents">
        <span className="alert-card__container__contents__name">
          {alertName}
        </span>
        <div className="alert-card__container__contents__lower-contents">
          <span className="alert-card__container__contents__owner-name">
            {shortId(alertOwner)}
          </span>
          <div className="alert-card__container__contents__button">
            <Button
              onClick={handleViewMoreClick}
              text="View More"
              color="orange"
              size="text"
              icon={{ iconName: IconNames.ArrowForward }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
