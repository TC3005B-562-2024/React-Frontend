import React from "react";
import './InfoLoader.css';

interface IInfoLoader {
  testId?: string;
}
const InfoLoader: React.FC<IInfoLoader> = ({testId}) => {

  return (
    <div data-testid={testId}className="info-loader" >
      <div className="info-loader__bubble"></div>
      <div className="info-loader__bubble"></div>
      <div className="info-loader__bubble"></div>
    </div>

  );
};

export default InfoLoader;
