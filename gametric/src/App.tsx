import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import AnnouncementForm from './pages/announcementForm';
import About from './pages/about';
import Announcements from './pages/Announcements';

function App() {  
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/announcements/new/gametricPass" element={<AnnouncementForm />} />
      </Routes>
    </Router>  
  )
}

export default App
