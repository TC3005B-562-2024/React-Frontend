import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './routes/router';
import { useAppContext } from './app-context/app-context';
import { MainLoader } from './components';


const App = () => {
  const { loadingContext } = useAppContext();

  return (
    <>
    {loadingContext ? (
      <MainLoader/>
    ) : (
      <RouterProvider router={AppRouter()} />
    )}
    </>
  );
}

export default App;
