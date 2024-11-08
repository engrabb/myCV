import React from 'react';
import './MainContent.css';
import { jobExperiences, educationHistory } from './data';

const MainContent = () => {
  return (
    <div className="main-content">
      <section className="section">
        <h2>Work Experience</h2>
        {jobExperiences.map((job, index) => (
          <div key={index} className="experience">
            <h3>{job.title}</h3>
            <p>{job.company} - {job.duration}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Education</h2>
        {educationHistory.map((education, index) => (
          <div key={index} className="education">
            <h3>{education.degree}</h3>
            <p>{education.institution} - {education.year}</p>
            <p>{education.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Skills & Merits</h2>
        <ul>
          <li>Great teamwork ability</li>
          <li>Comfortable as a leader</li>
          <li>Good vibes</li>
        </ul>
      </section>
    </div>
  );
};

export default MainContent;
