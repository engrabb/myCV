import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="a4-container">
      <div className="cv-layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
