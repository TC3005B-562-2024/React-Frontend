import React from 'react';
import { Icon } from '../Icon';
import './AlertNav.css'; // Make sure to import your CSS styles file
import { AlertNavProps } from './types';
/**
 * A navigation bar component to display alert information.
 * @param {Object} props - The props for the AlertNav component.
 * @param {string} props.instanceId - The unique identifier for the instance.
 * @param {boolean} props.alertsExists - Specifies whether alerts exist or not.
 * @returns {JSX.Element} The JSX element representing the AlertNav component.
 */
const AlertNav: React.FC<AlertNavProps> = ({ instanceId, alertsExists }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 py-4 px-6">
      <div className="flex items-center">
        <span className="font-bold text-lg text-white mr-2">INSTANCE:</span>
        <span className="text-orange-500">{instanceId}</span>
      </div>
      <div className={`flex items-center ${alertsExists ? 'animate-bounce' : ''}`}>
        {/* Wrap the Icon component in a div and apply the 'bounce' class conditionally */}
        <div className={`relative ${alertsExists ? 'animate-wiggle' : ''}`}>
          <Icon 
            iconName="warning" 
            color={alertsExists ? "red" : "white"} 
            className={`w-6 h-6 ${alertsExists ? 'animate-pulse' : ''}`} 
          />
        </div>
      </div>
    </nav>
  );
};


export default AlertNav;
