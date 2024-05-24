import { Agent, Queue, Skill, Landing, Alerts, Agents, Alert, Logs, Login } from "../pages";
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom':

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { useAppContext } from '../app-context/app-context';
import { ROUTES } from "./constants";

export const AppRouter = () => {
  const { user } = useAppContext();
  const isLoggedIn = Boolean(user);

  const routes: RouteObject[] = [
    {
        path: '/',
        element: isLoggedIn ?  <PrivateRouter /> : <Navigate to = "/login" />,
        children: [
            { path: ROUTES.QUEUE.path, element: <Queue /> },
            { path: ROUTES.SKILL.path, element: <Skill /> },
            { path: ROUTES.AGENTS.path, element: <Agents /> },
            { path: ROUTES.AGENT.path, element: <Agent /> },
            { path: ROUTES.ALERT.path, element: <Alert /> },
            { path: ROUTES.LANDING.path, element: <Landing /> },
            { path: ROUTES.ALERTS.path, element: <Alerts /> },
            { path: ROUTES.LOGS.path, element: <Logs /> },
        ],
    },
    {
        path: '/login',
        element: isLoggedIn ? <Navigate to = "/"/> : <PublicRouter />,
        children: [
            { path: '/login', element: <Login /> }
        ],
    }
  ]
  return createBrowserRouter(routes);
};

