import React from 'react';
import './Sidebar.css';
import face from '../cvface.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-picture">
        <img src={face} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>Faceless Man</h2>
        <p>Senior software engineer looking for new heights!</p>
      </div>
      <div className="hobby">
        <h3>Hobbys</h3>
        <p>Football</p>
        <p>Gym training</p>
        <p>Nature</p>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: your.email@example.com</p>
        <p>Phone: +123 456 789</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </div>
    </div>
  );
}

export default Sidebar;