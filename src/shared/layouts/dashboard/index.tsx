import { FC, PropsWithChildren } from "react";
import { Link } from 'react-router-dom';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout-container">
            <nav className='navigation-container'>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/experience'}>Experience</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/profile/permissions'}>Permissions</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
}