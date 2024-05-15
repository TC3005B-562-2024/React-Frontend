import { Agent, Queue, Skill, Landing, Alerts, Agents, Alert, Logs } from "../pages";
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from "./constants";

import Login from "../pages/login/Login";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <PrivateRouter />,
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
        element: <PublicRouter />,
        children: [
            { path: '/login', element: <Login /> }
        ],
    }
]

export const router = createBrowserRouter(routes);
