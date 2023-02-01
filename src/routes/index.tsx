import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteList } from './list';

export function RouterManager() {
    return <RouterProvider router={createBrowserRouter(RouteList)} />
}
