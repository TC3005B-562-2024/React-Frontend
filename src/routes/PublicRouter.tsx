import { Outlet } from 'react-router-dom';
import { useAppContext } from '../app-context/app-context';

const PublicRouter = () => {

  const { loadingContext } = useAppContext();

  if (loadingContext) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRouter;
