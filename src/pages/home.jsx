import React, { useState } from 'react';
import axios from 'axios';
import Services from '../components/Services';
import { AnnouncementsData } from '../components/AnnouncementsData';
import Announcements from './Announcements';

const Home = () => {
  const [page, setPage] = useState("Home"); // Default page is Home
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      title: `${formData.name} ${formData.email}`,
      content: formData.message
    };
    axios.post('https://gametric.pythonanywhere.com/announcements', dataToSend)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };

  const renderPage = () => {
    switch (page) {
      case 'Announcements':
        return <Announcements />;
      case 'Contact':
        return <Contact />;
      default:
        return (
          <div>
            <span className='overlayImg'></span>
            <section className="homeHead">
              <div className="content-container">
                <h1 className="main-title">Welcome to Gametric Network</h1>
                <p className="main-description">
                  We deliver cutting-edge software solutions that drive business success and foster technological growth in Africa. Committed to quality, innovation, and excellence in every project we undertake, ensuring the highest level of customer satisfaction.
                </p>
                {/* <a href="/services" className="cta-button">Explore Our Services</a> */}
              </div>
            </section>

            <div>
              <Services />
            </div>

            <div className='homeDetail mission-vision-section'>
              <span className="statement">
                <h1>Mission</h1>
                <div>
                  To deliver cutting-edge software solutions that drive business success and foster technological growth in Africa. We are committed to quality, innovation, and excellence in every project we undertake, ensuring the highest level of customer satisfaction
                </div>
              </span>
              <span className="statement">
                <h1>Vision</h1>
                <div>
                  To be the leading software development company in Africa, recognized for our innovative solutions, exceptional customer service, and commitment to technological advancement
                </div>
              </span>
            </div>

            <div className='homeDetail'>
              <section className="announcements-section cut-off">
                <h1>Announcements</h1>
                <ul className="announcements-list">
                  {AnnouncementsData.slice(-1).map(announcement => (
                    <li key={announcement.id} className="announcement-item">
                      <h2>{announcement.title}</h2>
                      <p>{announcement.content}</p>
                    </li>
                  ))}
                </ul>
              </section>
              <p onClick={() => setPage('Announcements')} className="read-more-link">Read more...</p>
            </div>

            <div className='homeDetail'>
              <h1>Contact Us</h1>
              <form onSubmit={handleSubmit} className='form'>
                <label>
                  <span>Name</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" value={formData.message} onChange={handleChange} className='textArea'></textarea>
                </label>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default Home;
