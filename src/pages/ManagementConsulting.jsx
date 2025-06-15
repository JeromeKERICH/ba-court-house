import { useEffect } from 'react';
import { FaChartBar, FaLightbulb, FaUsers, FaHandshake, FaGlobe } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ManagementConsultingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  

  const caseStudies = [
    {
      title: "Manufacturing Turnaround",
      result: "Increased EBITDA by 42% in 18 months",
      features: ["Operational Benchmarking", "Cost Restructuring", "Supply Chain Optimization"]
    },
    {
      title: "Tech Startup Scaling",
      result: "Achieved 300% revenue growth YoY",
      features: ["Go-to-Market Strategy", "Talent Acquisition Plan", "Investor Readiness"]
    }
  ];

  return (
    <div className="bg-white" >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Management Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven strategies and operational excellence to transform your business performance.
            </p>
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
              >
                Request Initial Consultation
                <FiExternalLink className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-5 md:py-10 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solve Your Toughest Business Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              In an era of rapid change, traditional approaches often fall short. We combine deep industry expertise with 
              analytical rigor to deliver actionable solutions.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaChartBar className="text-orange-500 text-4xl" />,
                title: "Evidence-Based Strategies",
                description: "Decisions grounded in data analytics and market intelligence, not guesswork."
              },
              {
                icon: <FaLightbulb className="text-orange-500 text-4xl" />,
                title: "Innovation Frameworks",
                description: "Systematic approaches to unlock growth and competitive advantage."
              },
              {
                icon: <FaUsers className="text-orange-500 text-4xl" />,
                title: "Execution Excellence",
                description: "Hands-on support to ensure strategies deliver measurable impact."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Case Studies */}
      <section className="py-5 md:py-10 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Client Impact
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-orange-500 font-medium mb-4">{project.result}</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-5 md:py-10 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Clients Choose Us
              </h2>
              <p className="text-lg text-blue-600 mb-6">
                Our approach delivers results where others fail:
              </p>
              <ul className="space-y-3">
                {[
                  "C-Suite Experience (Ex-McKinsey, BCG, Bain)",
                  "Industry-Specific Playbooks",
                  "Implementation-Focused Engagement",
                  "Global Network of Experts",
                  "Confidential Discretion Guaranteed"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaHandshake className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-2/5">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready for Breakthrough Results?</h3>
                <p className="text-gray-600 mb-6">
                  Get a confidential assessment of your strategic opportunities.
                </p>
                <a 
                  href="#contact" 
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                >
                  Start with Diagnostic Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementConsultingPage;