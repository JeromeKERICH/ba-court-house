import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-6 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have questions or ready to start your project? Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">WhatsApp Chat</h3>
                <a 
                  href="https://wa.me/351920565820" 
                  className="mt-1 text-gray-600 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +351 920 565 820
                </a>
                <p className="mt-1 text-sm text-gray-500">Fastest response time (24/7)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <a 
                  href="mailto:info@bacourthouse.com" 
                  className="mt-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@bacourthouse.com
                </a>
                <p className="mt-1 text-sm text-gray-500">Typically reply within 1 business day</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                <p className="mt-1 text-gray-600">We Work Remotely</p>
                <p className="mt-1 text-sm text-gray-500">Serving clients worldwide</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-2 rounded-full shadow text-blue-600 hover:bg-blue-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow text-blue-400 hover:bg-blue-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow text-blue-700 hover:bg-blue-50 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                Send Message
                <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;