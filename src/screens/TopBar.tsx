import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../constants/routes';

const TopBar: React.FC = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => pathname === path ? 'active' : '';

    return (
        <nav className='topbar'>
            <Link to="/" className={isActive(AppRoute.INDEX)}><div className="topbar__logo"></div></Link>
            <div className="topbar__actions">
                <Link to="/team" className={isActive(AppRoute.TEAM)}>Team</Link>
                <Link to="/investors" className={isActive(AppRoute.INVESTORS)}>Investors</Link>
                <Link to="/jobs" className={isActive(AppRoute.JOBS)}>Jobs</Link>
            </div>
        </nav>
    );
};

export { TopBar };
