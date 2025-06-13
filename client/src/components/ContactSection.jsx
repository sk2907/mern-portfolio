import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        I'm always open to new opportunities, collaborations, or just a friendly chat!
      </p>

      {/* Email & Location */}
      <div className="mb-6 space-y-2">
        <a
          href="mailto:kumarshivam916224@gmail.com"
          className="text-blue-600 hover:underline flex items-center justify-center gap-2"
        >
          <FaEnvelope /> kumarshivam916224@gamil.com
        </a>
        <p className="text-gray-500">📍 Based in India (Open to Remote Work)</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8 text-2xl text-gray-700">
        <a href="https://linkedin.com/in/shivam-kumar-4a60441b6" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sk2907" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
          <FaGithub />
        </a>
      </div>

      {/* Hire Me Button */}
      <a href="mailto:kumarshivam916224@gamil.com">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition-all">
          💼 Hire Me
        </button>
      </a>
    </section>
  );
}
