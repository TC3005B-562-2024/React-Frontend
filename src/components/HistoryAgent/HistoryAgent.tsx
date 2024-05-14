import React, { useState } from 'react';
import { Icon } from '../Icon';
import { IIconNoColorNoSize } from "../Icon/types";
import './HistoryAgent.css';

interface IHistoryAgentProps {
  log: string;
  date?: Date;
  icon: IIconNoColorNoSize;
  description: string;
}

const HistoryAgent: React.FC<IHistoryAgentProps> = ({ log, date, icon, description }) => {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState('');

  const handlePanelClick = () => {
    setExpanded(!expanded);
  };

  const handleIconClick = () => {
    setStatus(status === 'accepted' ? '' : 'accepted');
  };

  return (
    <div className={`history-agent__container ${status}`}>
      <div className="history-agent__content" onClick={handlePanelClick}>
        <div className="history-agent__left">
          <div className="history-agent__log">{log}</div>
        </div>
        <div className="history-agent__right">
        {date && ( // Verifica si date tiene un valor antes de intentar acceder a toDateString()
            <div className="history-agent__date">{date.toDateString()}</div>
        )}
          <div className="history-agent__icon" onClick={handleIconClick}>
            <Icon iconName={"check"} />
            <span>{status === 'accepted' ? 'accepted' : 'ignored'}</span>
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
