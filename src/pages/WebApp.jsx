import { useEffect } from 'react';
import { FaCode, FaMobileAlt, FaServer, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const WebAppDevelopmentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  const technologies = [
    { name: "Frontend", tools: "React, Next.js, Vue, Angular, Tailwind CSS" },
    { name: "Backend", tools: "Node.js, Python/Django, Ruby on Rails, .NET" },
    { name: "Mobile", tools: "React Native, Flutter, Swift, Kotlin" },
    { name: "Database", tools: "PostgreSQL, MongoDB, Firebase, AWS DynamoDB" },
    { name: "DevOps", tools: "Docker, Kubernetes, AWS, GitHub Actions" },
  ];

  const caseStudies = [
    {
      title: "E-Commerce Platform",
      result: "Increased conversion by 35%",
      features: ["PWAs", "Headless CMS", "Payment Gateway Integration"]
    },
    {
      title: "Healthcare Portal",
      result: "Reduced load time by 60%",
      features: ["HIPAA Compliance", "Telemedicine API", "Patient Dashboard"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Web & App</span> Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom digital solutions built with cutting-edge technologies to drive growth and efficiency.
            </p>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
              >
                Get Your Free Project Assessment
                <FiExternalLink className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your <span className="text-blue-600">Digital Presence</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              In today's competitive landscape, having a high-performing digital product isn't optional. 
              We engineer solutions that combine aesthetic appeal with technical excellence.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaCode className="text-blue-500 text-4xl" />,
                title: "Full-Cycle Development",
                description: "From concept to deployment and maintenance - we handle every stage of your project lifecycle."
              },
              {
                icon: <FaMobileAlt className="text-orange-500 text-4xl" />,
                title: "Cross-Platform Solutions",
                description: "Build once, deploy everywhere with our hybrid and native app development expertise."
              },
              {
                icon: <FaChartLine className="text-blue-500 text-4xl" />,
                title: "Performance Optimized",
                description: "Applications engineered for speed, scalability, and seamless user experiences."
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

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-orange-500">Technology</span> Stack
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-blue-500 font-medium mb-2">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Your Digital Future</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you need a MVP or enterprise-grade application, we'll deliver a solution that exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:dev@bacourthouse.com" 
              className="inline-flex items-center px-6 py-3 border border-transparent font-medium rounded-lg shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              Email Our Dev Team
            </a>
            <a 
              href="tel:+351920565820" 
              className="inline-flex items-center px-6 py-3 border border-white  font-medium rounded-lg shadow-sm text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Call +351 920 565 820
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success <span className="text-blue-600">Stories</span>
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
                <div className="bg-gray-50 px-6 py-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read full case study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Security-First</span> Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We implement enterprise-grade security measures at every layer:
              </p>
              <ul className="space-y-3">
                {[
                  "OWASP Top 10 Compliance",
                  "Regular Penetration Testing",
                  "GDPR & HIPAA Ready Solutions",
                  "End-to-End Encryption",
                  "Secure CI/CD Pipelines"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaShieldAlt className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-2/5">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-gray-600 mb-6">
                  Get a free 30-minute consultation with our technical architect.
                </p>
                <a 
                  href="#contact" 
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
    </div>
  );
};

export default WebAppDevelopmentPage;