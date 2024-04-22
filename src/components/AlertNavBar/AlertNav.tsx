import React from 'react';
import { Icon } from '../Icon';
import './AlertNav.css'; // Asegúrate de importar tu archivo de estilos CSS

/**
 * Card that shows important information of an alert.
 */

export interface AlertNavProps {
  instanceId: string;
  alertsExists: boolean;
}

const AlertNav: React.FC<AlertNavProps> = ({ instanceId, alertsExists }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 py-4 px-6">
      <div className="flex items-center">
        <span className="font-bold text-lg text-white mr-2">INSTANCE:</span>
        <span className="text-orange-500">{instanceId}</span>
      </div>
      <div className={`flex items-center ${alertsExists ? 'animate-shake' : ''}`}>
        {/* Wrap the Icon component in a div and apply the 'shake' class conditionally */}
        <div className={`relative ${alertsExists ? 'animate-wiggle' : ''}`}>
          <Icon 
            iconName="warning" 
            color={alertsExists ? "red" : "white"} 
            className={`w-6 h-6 ${alertsExists ? 'animate-ping' : ''}`} 
          />
        </div>
      </div>

    </nav>
  );
};

export default AlertNav;
