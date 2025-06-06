import { useEffect } from 'react';
import { FaChartLine, FaCogs, FaMobileAlt, FaServer, FaUsersCog } from 'react-icons/fa';

const ITBusinessConsultingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              IT Business Consulting That Drives Digital Transformation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Align technology with business goals for maximum ROI and operational efficiency. Our experts bridge the gap between IT and business strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Get Your Free IT Assessment
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Is Your Technology Holding You Back
              </h2>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-1 mr-3">✖</div>
                  <span>Outdated systems slowing down operations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-1 mr-3">✖</div>
                  <span>IT projects that don't deliver expected ROI</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-1 mr-3">✖</div>
                  <span>Security vulnerabilities keeping you awake at night</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-orange-500 mt-1 mr-3">✖</div>
                  <span>Teams struggling with inefficient workflows</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Solution
              </h3>
              <p className="text-gray-600 mb-6">
                We provide strategic IT consulting that aligns technology investments with your business objectives, ensuring every dollar spent drives measurable results.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-orange-600">
                  "BA Courthouse helped us reduce IT costs by 30% while improving system performance by 40% within 6 months."
                  <span className="block text-gray-700 mt-2">— Tech Director, Financial Services Client</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our IT Consulting Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
                title: "IT Strategy Development",
                description: "Create a roadmap aligning technology with 3-5 year business objectives, including budget planning and ROI analysis."
              },
              {
                icon: <FaCogs className="text-blue-600 text-4xl mb-4" />,
                title: "System Optimization",
                description: "Audit existing infrastructure to identify performance bottlenecks and cost-saving opportunities."
              },
              {
                icon: <FaMobileAlt className="text-blue-600 text-4xl mb-4" />,
                title: "Digital Transformation",
                description: "Guide your transition to cloud-based solutions, automation, and next-gen technologies."
              },
              {
                icon: <FaServer className="text-blue-600 text-4xl mb-4" />,
                title: "Infrastructure Planning",
                description: "Design scalable, secure architectures that grow with your business needs."
              },
              {
                icon: <FaUsersCog className="text-blue-600 text-4xl mb-4" />,
                title: "Vendor Management",
                description: "Evaluate and select technology partners, negotiate contracts, and manage relationships."
              },
              {
                icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
                title: "Compliance & Security",
                description: "Ensure systems meet industry regulations (GDPR, HIPAA, etc.) with robust security frameworks."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our 4-Phase Consulting Approach
          </h2>
          
          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gray-200 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "1",
                  title: "Discovery & Assessment",
                  description: "Comprehensive audit of current systems, processes, and pain points",
                  duration: "1-2 weeks"
                },
                {
                  step: "2",
                  title: "Gap Analysis",
                  description: "Identify mismatches between current state and business objectives",
                  duration: "1 week"
                },
                {
                  step: "3",
                  title: "Solution Design",
                  description: "Develop customized technology roadmap with implementation plan",
                  duration: "2-3 weeks"
                },
                {
                  step: "4",
                  title: "Execution Support",
                  description: "Assist with vendor selection, rollout, and change management",
                  duration: "Ongoing"
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {phase.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{phase.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{phase.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default ITBusinessConsultingPage;