import React from "react";
import './InfoLoader.css';

interface IInfoLoader {
  testId?: string;
}
const InfoLoader: React.FC<IInfoLoader> = () => {

  return (
    <div role="progressbar" className="info-loader">
      <div className="info-loader__bubble"></div>
      <div className="info-loader__bubble"></div>
      <div className="info-loader__bubble"></div>
    </div>

  );
};

export default InfoLoader;
