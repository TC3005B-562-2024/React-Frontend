import { Outlet } from 'react-router-dom';
import { useAppContext } from '../app-context/app-context';
import { MainLoader } from '../components';

const PublicRouter = () => {

  const { loadingContext } = useAppContext();

  if (loadingContext) {
    return <div><MainLoader /></div>
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRouter;
