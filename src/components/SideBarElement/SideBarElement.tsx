import React from 'react';
import { ROUTES } from '../../routes/constants';
import { Link } from 'react-router-dom';

const SideBarElement = () => {
  return (
    <div>
      <Link to={ROUTES.QUEUE.path}>Queue</Link>
    </div>
  );
};

export default SideBarElement;
