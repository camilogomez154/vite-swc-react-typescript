import { PropsWithChildren, FC, ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export type ProtectedRouteProps = PropsWithChildren & {
    redirectedPath?: string
    isAuthorized: boolean
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, isAuthorized, redirectedPath = '/' }) => {
    if (!isAuthorized) return <Navigate to={redirectedPath} replace />
    if (children) return children as ReactElement;
    return <Outlet />
}