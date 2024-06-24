import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                <li>
                <div className='sidebox'><Link to="/" className='link'>HOME</Link></div>
                </li>
                <li>
                <div className='sidebox'><Link to="/personal" className='link'>PERSONAL DETAILS</Link></div>
                
                </li>
                <li>
                <div className='sidebox'><Link to="/certification" className='link'>CERTIFICATIONS</Link></div>
                
                </li>
                <li>
                <div className='sidebox'><Link to="/education" className='link'>EDUCATION</Link></div>
                
                </li>
                    <li>
                    <div className='sidebox'>SETTINGS</div></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;