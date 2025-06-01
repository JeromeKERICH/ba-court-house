import { useState } from 'react';

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('expertise');

  const advantages = {
    expertise: {
      title: "Industry Experts",
      description: "Our team brings 10+ years of combined experience in digital transformation, with certifications in PMP, Scrum, and ITIL frameworks.",
    
      stats: "200+ Projects Delivered"
    },
    approach: {
      title: "Agile Modern Solutions",
      description: "We don't just consult - we implement. Our iterative approach ensures measurable results at every stage of your transformation journey.",
      
      stats: "40% Faster Implementation"
    },
    strategy: {
      title: "Personalized Strategy",
      description: "No cookie-cutter solutions. We analyze your unique challenges to create tailored roadmaps with clear KPIs and milestones.",
  
      stats: "100% Custom Solutions"
    },
    results: {
      title: "Proven Track Record",
      description: "From startups to Fortune 500 companies, our methodologies consistently deliver ROI. See our case studies for real-world examples.",
      
      stats: "95% Client Retention"
    }
  };

  const testimonials = [
    {
      quote: "BA Courthouse transformed our project delivery timeline from 6 months to just 8 weeks with their agile approach.",
      author: "Maria S., Tech Startup CEO",
      company: "Lisbon"
    },
    {
      quote: "The IT consulting provided clear direction for our digital transformation, resulting in 30% cost savings.",
      author: "David K., Financial Services Director",
      company: "Remote"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-blue-600">Choose</span> <span className="text-orange-500">BA Courthouse?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            The competitive edge that sets our consulting apart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Advantages - Left Column */}
          <div>
            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
              {Object.keys(advantages).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === key
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {advantages[key].title}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">{advantages[activeTab].icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {advantages[activeTab].title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {advantages[activeTab].stats}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 pl-12">
                {advantages[activeTab].description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-orange-500">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-blue-600">20+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-orange-500">10+</p>
                <p className="text-gray-600">Industries Served</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-blue-600">100%</p>
                <p className="text-gray-600">Client-Focused</p>
              </div>
            </div>
          </div>

          {/* Testimonials - Right Column */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                What Our Clients Say
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="relative pl-6">
                    <div className="absolute left-0 top-1 text-4xl text-gray-200">"</div>
                    <blockquote className="text-gray-600 italic">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-4 text-right">
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-blue-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Our Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certified Scrum Masters
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  PMP Certified Project Managers
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ITIL v4 Certified
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Google Cloud Certified
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;