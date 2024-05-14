<<<<<<< HEAD
import { Agent, Queue, Skill, Landing, Alerts, Agents } from "../pages";
=======
import { Agent, Queue, Skill, Landing, Alerts, Agents, Alert } from "../pages";
>>>>>>> origin/dev
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
<<<<<<< HEAD
            { path: ROUTES.QUEUE.path, element: <Queue/>},
            { path: ROUTES.SKILL.path, element: <Skill/>},
            { path: ROUTES.AGENTS.path, element: <Agents/>},
            { path: ROUTES.AGENT.path, element: <Agent/>},
            { path: ROUTES.LANDING.path, element: <Landing/>},
            { path: ROUTES.ALERTS.path, element: <Alerts/>},
=======
            { path: ROUTES.QUEUE.path, element: <Queue /> },
            { path: ROUTES.SKILL.path, element: <Skill /> },
            { path: ROUTES.AGENTS.path, element: <Agents /> },
            { path: ROUTES.AGENT.path, element: <Agent /> },
            { path: ROUTES.ALERT.path, element: <Alert /> },
            { path: ROUTES.LANDING.path, element: <Landing /> },
            { path: ROUTES.ALERTS.path, element: <Alerts /> },
>>>>>>> origin/dev
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
