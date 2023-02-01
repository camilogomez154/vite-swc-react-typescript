import { FC, PropsWithChildren } from 'react';

export const CenterLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout-container layout-container__center">
            {children}
        </div>
    )
}