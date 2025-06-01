import { useEffect } from 'react';
import { FaProjectDiagram, FaChartLine, FaUsers, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectManagementPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="text-blue-600">Project Management</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PMP-certified leadership to deliver your projects on time, within scope, and under budget.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              End-to-End <span className="text-orange-500">Project Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We implement industry-standard methodologies tailored to your organization's needs.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaProjectDiagram className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Comprehensive Project Oversight</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Initiation to closure management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Triple constraint optimization (time/cost/scope)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Risk assessment and mitigation planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Stakeholder communication frameworks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Methodologies We Implement</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <h4 className="font-medium text-orange-700">Agile</h4>
                  <p className="text-sm text-orange-600">Scrum, Kanban</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-700">Waterfall</h4>
                  <p className="text-sm text-blue-600">Traditional PM</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-700">Hybrid</h4>
                  <p className="text-sm text-blue-600">Tailored blends</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <h4 className="font-medium text-orange-700">Lean</h4>
                  <p className="text-sm text-orange-600">Waste reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">4-Phase</span> Project Management Approach
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Planning & Scoping",
                description: "Define objectives, deliverables, and success metrics",
                icon: <FaClipboardCheck className="w-full h-full" />,
                color: "blue"
              },
              {
                title: "Team Assembly",
                description: "Identify stakeholders and build project team",
                icon: <FaUsers className="w-full h-full" />,
                color: "orange"
              },
              {
                title: "Execution",
                description: "Monitor progress with agile tracking systems",
                icon: <FaProjectDiagram className="w-full h-full" />,
                color: "blue"
              },
              {
                title: "Review & Handoff",
                description: "Conduct retrospectives and transition ownership",
                icon: <FaChartLine className="w-full h-full" />,
                color: "orange"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${step.color === 'orange' ? 'border-orange-500' : 'border-blue-500'} hover:shadow-md transition-all`}
              >
                <div className={`text-4xl mb-4 ${step.color === 'orange' ? 'text-orange-500' : 'text-blue-500'}`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Elevate Your Project Success Rate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our PMP-certified consultants average 92% on-time project completion across industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book-consultation"
              className="px-8 py-3.5 text-base font-medium text-white bg-orange-400 hover:bg-orange-300 rounded-lg shadow-lg transition-all duration-300"
            >
              Book Free Strategy Session
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-3.5 text-base font-medium text-white bg-transparent hover:bg-blue-700 rounded-lg border-2 border-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Badges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Certified Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center">
              <div className="bg-white p-2 rounded mr-3 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">PMP</div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Project Management Professional</h4>
                <p className="text-sm text-gray-500">PMI Certified</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center">
              <div className="bg-white p-2 rounded mr-3 shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">CSM</div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Certified Scrum Master</h4>
                <p className="text-sm text-gray-500">Scrum Alliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagementPage;