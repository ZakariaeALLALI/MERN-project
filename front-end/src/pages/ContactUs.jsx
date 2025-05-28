import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import store from '../assets/store.jpg';
import PageTopSection from '../components/PageTopSection';

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

    // Simulate form submission
    setTimeout(() => {
      setResponseMessage('Thank you for contacting us. We will get back to you soon!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <PageTopSection />

      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Form Section */}
            <div className="w-full md:w-1/2 bg-black border border-gray-800 rounded-lg shadow-lg p-8">
              {responseMessage && (
                <div className="mb-4 p-4 bg-green-900 text-green-300 rounded border border-green-700">
                  {responseMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-none border border-gray-600 bg-transparent text-white shadow-sm focus:border-white focus:ring-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-none border border-gray-600 bg-transparent text-white shadow-sm focus:border-white focus:ring-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="mt-1 block w-full rounded-none border border-gray-600 bg-transparent text-white shadow-sm focus:border-white focus:ring-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-white rounded-none shadow-sm text-base font-medium text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={store}
                alt="Our Store"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
