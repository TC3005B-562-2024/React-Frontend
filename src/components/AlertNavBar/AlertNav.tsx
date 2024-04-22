import React from 'react';
import { Icon } from '../Icon';

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
      <div className="flex items-center">
        {/* Only display the Icon component */}
        <Icon iconName="warning" color={alertsExists ? "red" : "white"} />
      </div>
    </nav>
  );
};

export default AlertNav;
