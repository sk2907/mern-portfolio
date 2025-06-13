import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ContactSection from "../components/ContactSection";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');
    } catch (err) {
      alert('Failed to send message.');
    }
  };

  return (
    <div>
       <ContactSection />
        <form onSubmit={handleSubmit} className="p-6 max-w-xl mx-auto space-y-4">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
      <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 border rounded h-32" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
    </div>
   
  );
}

