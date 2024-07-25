import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import AnnouncementForm from './pages/announcementForm';
import About from './pages/about';
import Announcements from './pages/Announcements';

const App =() => {  
  const [page, setPage] = useState('Home');

  const renderPage = () => {
    switch (page) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Announcements':
        return <Announcements />;
      case 'AnnouncementForm':
        return <AnnouncementForm />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setPage('Home')}>Home</button>
        <button onClick={() => setPage('About')}>About</button>
        <button onClick={() => setPage('Contact')}>Contact</button>
        <button onClick={() => setPage('Announcements')}>Announcements</button>
        <button onClick={() => setPage('AnnouncementForm')}>New Announcement</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App
