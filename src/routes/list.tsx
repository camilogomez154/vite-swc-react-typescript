import { AboutPage, ContactPage, ErrorPage, ExperiencePage, WelcomePage } from '../pages';
import { ProtectedRoute } from './protectedRoutes';
import { RouteObject } from 'react-router-dom';

export const RouteList: RouteObject[] = [
    {
        errorElement: <ErrorPage />,
        element: <WelcomePage />,
        index: true,
        path: '/',
    },
    {
        element: <AboutPage />,
        path: '/about',
    },
    {
        element: <ExperiencePage />,
        path: '/experience',
    },
    {
        element: <ContactPage />,
        path: '/contact',
    },
    {
        element: <ProtectedRoute isAuthorized={false} redirectedPath='/unauthorized' />,
        children: [
            {
                element: <h1>Profile</h1>,
                path: '/profile'
            },
            {
                element: <h1>permissions</h1>,
                path: '/profile/permissions'
            }
        ]
    },

];