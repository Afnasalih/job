// src/EducationDetails.js

import React from 'react';
import './Education.css';

const EducationDetails = () => {
  const educationData = [
    {
      degree: 'MBA',
      startYear: 2019,
      endYear: 2021,
      cgpa: 8,
      fieldOfStudy: 'Marketing'
    },
    {
      degree: 'BTECH',
      startYear: 2019,
      endYear: 2023,
      cgpa: 8.5,
      fieldOfStudy: 'CSE'
    },
    {
      degree: 'HSE',
      startYear: 2017,
      endYear: 2019,
      cgpa: 8.9,
      fieldOfStudy: 'CS'
    }
  ];

  return (
    <div className="education-details">
      {educationData.map((item, index) => (
        <div className="education-card" key={index}>
        <div className='e1'>
          <div className='ee1'><p><strong>Degree:</strong> {item.degree}</p></div>
          <div className='ee1'> <p><strong>Field of Study:</strong> {item.fieldOfStudy}</p></div>
          <div className='ee1'> <p><strong>Start Year:</strong> {item.startYear}</p></div>
        </div>
          
        <div className='e1'>
          <div className='ee1'>   <p><strong>End Year:</strong> {item.endYear}</p></div>
          <div className='ee1'><p><strong>CGPA:</strong> {item.cgpa}</p></div>
          <div className='ee1'> </div>
        </div>
         
       
          
        </div>
      ))}
    </div>
  );
};

export default EducationDetails;
