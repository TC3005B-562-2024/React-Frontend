import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './routes/router';


const App = () => {
  return (
    <>
      <RouterProvider router={AppRouter()} />
    </>
  );
}

export default App;
