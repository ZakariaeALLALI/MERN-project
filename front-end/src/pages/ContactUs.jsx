import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await axios.post('http://localhost:4000/api/contacts', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      setResponseMessage(
        error.response?.data?.error || 'thank you for contacting us.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="py-10 px-4 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] p-10">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-7 bg-white shadow-lg rounded-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
                  required
                />
              </div>
              {/* Email Field */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
                  required
                />
              </div>
              {/* Message Field */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here"
                  className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
                  rows="5"
                  required
                />
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {/* Response Message */}
              {responseMessage && (
                <p className={`mt-4 text-center ${isSubmitting ? 'text-gray-500' : 'text-green-600'}`}>
                  {responseMessage}
                </p>
              )}
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center md:pl-8">
            <img
              src="/ryan.png"
              alt="Contact Us"
              className="w-11/12 max-h rounded-e-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
