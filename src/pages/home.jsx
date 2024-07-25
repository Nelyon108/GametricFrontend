import React, { useState, useEffect } from 'react';
import axios from 'axios';
import announcementForm from './announcementForm';
import contact from './contact';
import Services from '../components/Services';

const home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    axios.get('https://gametric.pythonanywhere.com/announcements')
      .then(response => {
        setAnnouncements(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the announcements!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://gametric.pythonanywhere.com/send_message', formData)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };

  const lastTwoAnnouncements = announcements.slice(-2);

  return (
    <div>
        {/* <div className='homeOverlay'></div> */}
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

        <div >
          <Services></Services>
        </div>

        <div className='homeDetail mission-vision-section'>
        <span className="statement">
            <h1>Mission</h1>
            <div>
            To deliver cutting-edge software solutions that drive business success and foster
            technological growth in Africa. We are committed to quality, innovation, and
            excellence in every project we undertake, ensuring the highest level of customer
            satisfaction
            </div>
            </span>
            <span className="statement">
                        <h1>Vision</h1>
                        <div>
                            To be the leading software development company in Africa, recognized for our
            innovative solutions, exceptional customer service, and commitment to
            technological advancement
            </div>
          </span>
        </div>
        
        <div className='homeDetail'>
        <section className="announcements-section cut-off">
      <h1>Announcements</h1>
      <ul className="announcements-list">
        {lastTwoAnnouncements.map(announcement => (
          <li key={announcement.id} className="announcement-item">
            <h2>{announcement.title}</h2>
            <p>{announcement.content}</p>
          </li>
        ))}
      </ul>
      
    </section>
    <a href="/announcements" className="read-more-link">Read more...</a>
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
          <textarea name="content" value={formData.content} onChange={handleChange} className='textArea'></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>

    </div>
  );
}

export default home;
