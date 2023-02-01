import { FC, PropsWithChildren } from 'react';

export const CenterLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="center-layout-container">
            Center Layout
            {children}
        </div>
    )
}