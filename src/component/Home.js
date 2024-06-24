import React from 'react';
import './Home.css'
import PRO from "../asset/pro.jpg"

const Home = () => {
    return (
      <div>
         <div className="profile-card">
      <div className="profile-header">
        <img src={PRO} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2>Name     :      AFNA V.S</h2>
          <h3><strong>E-mail  :</strong> afnavs25@gmail.com</h3>
          <h3><strong>Ph.No :</strong> +91 9988776655</h3>
          <h3><strong>Location :</strong> Kochi, Ekm</h3>
        </div>
      </div>
      
    </div>
    <div className='under'>
    <div className="profile-stats">
        <div className="profile-stat">
          <h2>Applied Jobs</h2>
          <div className='cir'>
          <div className="stat-circle">
            <span>56</span>
          </div>
          </div>
          
        </div>
        <div className="profile-stat">
          <h2>Search Appearances</h2>
          <div className='cir'>
          <div className="stat-circle">
            <span>23</span>
          </div>
          </div>
          
        </div>
        <div className="profile-stat">
          <h2>Recruiter Action</h2>
          <div className='cir'>
          <div className="stat-circle">
            <span>19</span>
          </div>
          </div>
          
        </div>
      </div>
    </div>
      </div>
       
    );
};

export default Home;