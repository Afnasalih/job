import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import LOGO from '../asset/file.png'

const Header = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };
    return (
        <header className="header">
        <div className='sp'>
        <img src={LOGO} alt='' className='logo'/>
            <h1>WELCOME TO JOB PORTAL</h1>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
        
        </header>
    );
};

export default Header;