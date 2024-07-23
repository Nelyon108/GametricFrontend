import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Announcements () {
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

  return (
    <div className="announcements-section">
      <h1>Announcements</h1>
      <ul className="announcement-list">
        {announcements.map(announcement => (
          <li className="announcement-item" key={announcement.id}>
            <h2 className="title">{announcement.title}</h2>
            <p className="content">{announcement.content}</p>
          </li>
        ))}
      </ul>

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
  )
}
