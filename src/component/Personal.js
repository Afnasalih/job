import React from 'react';
import './Personal.css'

const Personal = () => {
    return (
        <div className='form'>
            
            <div className='left'>
                <div className='up'>
                    <div className='mid1'>
                    <div className="form-group">
          <label>First Name</label>
          <input type="text" value="Afna" readOnly />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value="V.S" readOnly />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" value="9961637917" readOnly />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="text" value="25-8-2024" readOnly />
        </div>
                    </div>
                </div>
                <div className='down'>
                <div className='mid1p'>
                <div className="form-group">
          <label>Company Name</label>
          <input type="text" value="Blue Moon Pvt.LTD" readOnly />
        </div>
        <div className="form-group">
          <label>Role</label>
          <input type="text" value="Jnr. Software Developer" readOnly />
        </div>
        <div className="form-group">
          <label>Year of Experience</label>
          <input type="text" value="5" readOnly />
        </div>
        <div className="form-group">
          <label>Previous Salary</label>
          <input type="text" value="100000" readOnly />
        </div>
                </div>
                </div>
            </div>
            <div className='right2'>
                <div className='up2'>
                    <div className='mid2'>
                    <div className="form-group">
          <label>House Name</label>
          <textarea value=" Vathukkaparambil House
                           Ponnarimangalam 
                           Mulavukada 
                           Ernakulam" readOnly />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" value="Kerala" readOnly />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" value="India" readOnly />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input type="text" value="682504" readOnly />
        </div> 
                    </div>
                </div>
                <div className='down2'>
                    <div className='mid3'>
                    <h4>SKILLS</h4>
        <div className="skills">
          <span>ReactJS</span>
          <span>UI/UX</span>
          <span>NodeJS</span>
          <span>HTML/CSS</span>
          <span>NextJS</span>
          <span>MongoDB</span>
          <span>GIT</span>
          <span>cPanel</span>
        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Personal;