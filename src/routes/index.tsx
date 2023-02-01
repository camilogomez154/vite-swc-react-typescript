import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WelcomePage } from '../pages';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage />
    }
]);

export function RouterManager() {
    return <RouterProvider router={Router} />
}