import { useEffect } from 'react';
import { FaRocket, FaUsers, FaChartLine, FaSyncAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AgileCoachingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Agile Coaching</span> for Sustainable Transformation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Transform your teams with expert Scrum, Kanban, and SAFe® implementation that drives measurable business results.
            </p>
            <Link
              to="/book-consultation"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our <span className="text-orange-500">Agile Coaching</span> Framework
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just teach Agile—we embed it into your organizational DNA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket className="text-orange-500 text-4xl mb-4" />,
                title: "Scrum Mastery",
                description: "From basic ceremonies to advanced facilitation techniques for high-performing teams"
              },
              {
                icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
                title: "Kanban Flow",
                description: "Visualize work, limit WIP, and optimize your delivery pipeline"
              },
              {
                icon: <FaChartLine className="text-orange-500 text-4xl mb-4" />,
                title: "SAFe® Implementation",
                description: "Scale Agile across teams with proven enterprise frameworks"
              },
              {
                icon: <FaSyncAlt className="text-blue-500 text-4xl mb-4" />,
                title: "Continuous Improvement",
                description: "Build self-sufficient teams through retrospectives and metrics"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Deep Dive */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex gap-12 items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Our Approach</span> Works
              </h2>
              <ul className="space-y-6">
                {[
                  "<strong>Hybrid Methodology</strong>: Blend Scrum, Kanban, and Lean based on your needs",
                  "<strong>Metrics-Driven</strong>: Focus on lead time, cycle time, and throughput",
                  "<strong>Behavioral Focus</strong>: Address mindset shifts alongside processes",
                  "<strong>Outcome-Oriented</strong>: Tie Agile practices to business KPIs"
                ].map((item, index) => (
                  <li key={index} className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Coaching Process</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1.",
                    detail: "30-day team maturity evaluation"
                  },
                  {
                    step: "2.",
                    detail: "Tailored implementation plan"
                  },
                  {
                    step: "3.",
                    detail: "3-6 months of hands-on guidance"
                  },
                  {
                    step: "4.",
                    detail: "Gradual transition to internal coaches"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} mr-4`}>
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Team's Agility?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a free 30-minute assessment to identify your Agile maturity and improvement opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book-consultation"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Free Session
            </Link>
            <Link
              to="/case-studies"
              className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-blue-600">Measurable</span> Outcomes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "40-70%",
                description: "Faster time-to-market for product features"
              },
              {
                metric: "3-5x",
                description: "Increase in team productivity"
              },
              {
                metric: "85%+",
                description: "Stakeholder satisfaction improvement"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="text-5xl font-bold text-orange-500 mb-4">{item.metric}</p>
                <p className="text-gray-700 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AgileCoachingPage;