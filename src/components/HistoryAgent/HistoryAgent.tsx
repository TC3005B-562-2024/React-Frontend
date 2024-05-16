import React, { useState } from 'react';
import { Icon } from '../Icon';
import { IIconNoColorNoSize } from "../Icon/types";
import './HistoryAgent.css';
import classNames from 'classnames';

interface IHistoryAgentProps {
  log: string;
  date?: Date;
  icon: IIconNoColorNoSize;
  description: string;
  color?: 'red' | 'green';
}

const HistoryAgent: React.FC<IHistoryAgentProps> = ({ log, date, icon, description, color }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePanelClick = () => {
    setExpanded(!expanded);
  };

  const containerClasses = classNames('history-agent__container', {
    'history-agent__container--expanded': expanded,
    'history-agent__container--red': color === 'red' && expanded,
    'history-agent__container--green': color === 'green' && expanded,
  });

  const iconsClasses = classNames('history-agent__icon-container', {
    'history-agent__icon-container--red': color === 'red',
    'history-agent__icon-container--green': color === 'green',
  });

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className={containerClasses} onClick={handlePanelClick}>
      <div className="history-agent__content">
        <div className="history-agent__left">
          <div className="history-agent__log">{log}</div>
        </div>
        <div className="history-agent__right">
          {date && (
            <div className="history-agent__date">{formatDate(date)}</div>
          )}
          <div className="history-agent__icon-status-container">
            <div className={iconsClasses}>
              <Icon iconName={icon.iconName} />
              <span className='history-agent__icon-status-container__text'>
                {color === 'green' ? 'accepted' : 'ignored'}
              </span>
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="history-agent__description">
          {description}
        </div>
      )}
    </div>
  );
};

export default HistoryAgent;
