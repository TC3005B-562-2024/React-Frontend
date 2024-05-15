import React, { useState } from 'react';
import { Icon } from '../Icon';
import { IIconNoColorNoSize } from "../Icon/types";
import './HistoryAgent.css';

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
    <div className={`history-agent__container ${expanded ? `expanded ${color}` : ''}`} onClick={handlePanelClick}>
      <div className="history-agent__content">
        <div className="history-agent__left">
          <div className="history-agent__log">{log}</div>
        </div>
        <div className="history-agent__right">
          {date && (
            <div className="history-agent__date">{formatDate(date)}</div>
          )}
          <div className="history-agent__icon-status-container">
            <div className={`history-agent__icon-container ${color}`}>
              <Icon iconName={icon.iconName} />
              <span>{color === 'green' ? 'accepted' : 'ignored'}</span>
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
