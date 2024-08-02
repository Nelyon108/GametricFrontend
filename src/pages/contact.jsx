import React, { useState } from 'react';
import axios from 'axios';

const contact =() => {
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

  return (
    <div className='homeDetail'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="content" value={formData.content} onChange={handleChange} className='textArea'></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default contact;
