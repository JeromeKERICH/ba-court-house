import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web and app development, career coaching, project management, Agile consulting, HR solutions, and more.",
    },
    {
      question: "How do I request a service?",
      answer:
        "Click the 'Request a Service' button and fill out the form. We'll get back to you shortly after reviewing your request.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Yes, all our services are customizable based on your business needs. Let's discuss and tailor a plan that works for you.",
    },
    {
      question: "Is there a consultation before booking?",
      answer:
        "Absolutely! We offer a free 15-minute consultation to understand your needs before starting any project.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center mb-6">Frequently Asked <span className="text-orange-500">Questions</span></h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {faq.question}
              <span className="ml-4 text-2xl text-blue-600">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-3 text-gray-600 transition-all duration-300 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
