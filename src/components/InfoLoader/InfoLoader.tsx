import React from "react";
import './InfoLoader.css';

const InfoLoader: React.FC = () => {
  return (
    <div role="progressbar" className="info-loader">
      <div className="info-loader__bubble"></div>
      <div className="info-loader__bubble"></div>
      <div className="info-loader__bubble"></div>
    </div>

  );
};

export default InfoLoader;
