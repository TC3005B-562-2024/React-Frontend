import { Outlet } from 'react-router-dom';
import { useAppContext } from '../app-context/app-context';

const PublicRouter = () => {

  const { loadingContext } = useAppContext();
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRouter;
