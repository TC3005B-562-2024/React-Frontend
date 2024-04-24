import { Outlet } from 'react-router-dom';

const PublicRouter = () => {
  return (
    <div>
      <div>
        Public Router
      </div>
      <Outlet/>
    </div>
  );
};

export default PublicRouter;
