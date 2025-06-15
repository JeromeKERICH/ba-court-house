import React, { useState } from "react";

const ServiceCTA = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "IT Business Consulting",
    "Agile Coaching",
    "Project Management",
    "HR Solutions",
    "Web & App Development",
    "Career Coaching",
    "Software Development",
    "Management Consulting",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service Requested: ${selectedService}`);
    setShowModal(false);
  };

  return (
    <section className="bg-gray-50 py-2">
      <div className="text-center my-2">
        {/* CTA Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Your Journey Here
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative animate-fadeIn">
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
              >
                &times;
              </button>

              {/* Modal Content */}
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Let's Work Together</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-left text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-left text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-left text-gray-700 font-medium mb-1">Select Service</label>
                  <select
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">-- Choose a service --</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-left text-gray-700 font-medium mb-1">Message (Optional)</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceCTA;
