import React from 'react';
import './MainLoader.css';

export const MainLoader: React.FC = () => {
  return (
    <div data-testid="Loader" className="main-loader-loop main-loader-cube">
      <div className="main-loader__item main-loader-cube"></div>
      <div className="main-loader__item main-loader-cube"></div>
      <div className="main-loader__item main-loader-cube"></div>
      <div className="main-loader__item main-loader-cube"></div>
      <div className="main-loader__item main-loader-cube"></div>
      <div className="main-loader__item main-loader-cube"></div>
    </div>
  )
};

export default MainLoader;
