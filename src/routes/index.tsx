import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello world!!</h1>
    }
]);

export function RouterManager() {
    return <RouterProvider router={Router} />
}