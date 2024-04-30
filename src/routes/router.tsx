import { Agent, Queue, Skill, Landing, Alerts } from "../pages";
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from "./constants";

import Login from "../pages/login/Login";

const routes: RouteObject[] = [
    {
        path: '/', 
        element: <PrivateRouter/>,
        children: [
            { path: ROUTES.QUEUE.path, element: <Queue/>},
            { path: ROUTES.SKILL.path, element: <Skill/>},
            { path: ROUTES.AGENT.path, element: <Agent/>},
            { path: ROUTES.LANDING.path, element: <Landing/>},
            { path: ROUTES.ALERTS.path, element: <Alerts/>},
        ],
    },
    {
        path: '/login', 
        element: <PublicRouter/>,
        children: [
            { path: '/login', element: <Login/> }
        ],
    }
]

export const router = createBrowserRouter(routes);
