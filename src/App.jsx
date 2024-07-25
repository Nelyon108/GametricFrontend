import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import AnnouncementForm from './pages/announcementForm';
import About from './pages/about';
import Announcements from './pages/Announcements';
import logo from './assets/GametricG.png';

const App =() => {  
  const [page, setPage] = useState('Home');

  const ScrolltoBottom = () => {
    scrollBy(0, 1000000);
} 

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
      <nav className='header'>
        <a href="/"><img src={logo} alt="Gametric Logo" className='logo' /></a>
        <div className='navigation'>
        <p onClick={() => setPage('Home')}>Home</p>
        <p onClick={() => setPage('About')}>About</p>
        <p onClick={() => setPage('Contact')}>Contact</p>
        <p onClick={() => setPage('Announcements')}>Announcements</p>
        {/* <button onClick={() => setPage('AnnouncementForm')}>New Announcement</button> */}
        </div>

        <button onClick={ScrolltoBottom}>Contact Us</button>
    </nav>
      {renderPage()}
    </div>
  );
}

export default App
