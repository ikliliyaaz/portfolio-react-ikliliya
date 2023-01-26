import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Ikliliya</h2>
        <div className='prompt'>
          <p> A software developer with passionate learning and creating</p>
          <LinkedInIcon/>
          <EmailIcon/>
        </div>
      </div>
      <div className='skills'> 
        <h1>skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              TailwindCSS, Bootstrap, ReactJS, NPM 
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Javascript, NodeJS</span>
          </li>
          <li className='item'>
            <h2>Environmental Sustainability</h2>
            <span>
              Energy Management, Water Management, Emission Management, Waste Management, Chemical Management
            </span>
          </li>
        </ol> 
      </div>
    </div>
  )
}

export default Home