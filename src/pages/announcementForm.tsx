import React, { useState } from 'react';
import axios from 'axios';

function announcementForm() {
  const [formData, setFormData] = useState({
    title: '',
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
    axios.post('http://127.0.0.1:5000/announcements', formData)
      .then(response => {
        alert(response.data.message);
        setFormData({ title: '', content: '' }); // Clear form after successful submission
      })
      .catch(error => {
        console.error('There was an error posting the announcement!', error);
      });
  };

  return (
    <div>
      <h1>Post a New Announcement</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          <label>Content:</label>
          <textarea name="content" className='textArea' value={formData.content} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Post Announcement</button>
      </form>
    </div>
  );
}

export default announcementForm;
