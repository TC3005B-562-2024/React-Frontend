import React from 'react';

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
        <div className={`h-12 w-12 flex items-center justify-center ${alertsExists ? 'bg-red-500' : 'bg-gray-800'} rounded-full`}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="text-white">
            <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/>
          </svg>
        </div>
      </div>
    </nav>
  );
};


export default AlertNav;
