import { Agent, Queue, Skill } from "../pages";
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from "./constants";
import { Alerts } from "../pages/Alerts";

const routes: RouteObject[] = [
    {
        path: '/', 
        element: <PrivateRouter/>,
        children: [
            { path: ROUTES.QUEUE.path, element: <Queue/>},
            { path: ROUTES.SKILL.path, element: <Skill/>},
            { path: ROUTES.AGENT.path, element: <Agent/>},
            { path: ROUTES.ALERTS.path, element: <Alerts/>},
        ],
    },
    {
        path: '/login', 
        element: <PublicRouter/>,
        children: [
            { path: '/login', element: <div> Log In </div>}
        ],
    }
]

export const router = createBrowserRouter(routes);
