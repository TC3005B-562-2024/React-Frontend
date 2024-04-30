import { Agent, Queue, Skill} from "../pages";
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import { ROUTES } from "./constants";
import { Alert } from "../pages/Alert";

import Login from "../pages/login/Login";

const routes: RouteObject[] = [
    {
        path: '/', 
        element: <PrivateRouter/>,
        children: [
            { path: ROUTES.QUEUE.path, element: <Queue/>},
            { path: ROUTES.SKILL.path, element: <Skill/>},
            { path: ROUTES.AGENT.path, element: <Agent/>},
            { path: ROUTES.ALERT.path, element: <Alert/>},
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
