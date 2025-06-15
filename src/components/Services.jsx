import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoreServices = () => {
  const services = [
    {
      title: "IT Business Consulting",
      description: "Align technology with business goals for maximum ROI and operational efficiency.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      path: "/it-consulting",
      bgImage: "url('/assets/s2.jpg')"
    },
    {
      title: "Agile Coaching",
      description: "Transform teams with Scrum, Kanban, and SAFe frameworks for rapid delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      path: "/agile",
      bgImage: "url('/assets/s1.jpg')"
    },
    {
      title: "Project Management",
      description: "End-to-end project leadership with PMP-certified expertise.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      path: "/project-management",
      bgImage: "url('/assets/s6.jpg')"
    },
    {
      title: "HR Solutions",
      description: "Modern talent strategies from recruitment to performance management.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-50",
      path: "/hr-solutions",
      bgImage: "url('/assets/s4.jpg')"
    },
    {
      title: "Web & App Development",
      description: "Custom digital solutions built with cutting-edge technologies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      path: "/web-app",
      bgImage: "url('/assets/s3.jpg')"
    },
    {
      title: "Career Coaching",
      description: "Personalized mentoring for tech professionals at all levels.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-red-600",
      bgColor: "bg-red-50",
      path: "/career-coaching",
      bgImage: "url('/assets/s7.jpg')"
    }
  ];

  return (
    <section className="py-10 sm:py-10 lg:py-10 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Our Core Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Tailored solutions to drive your business transformation at every stage
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="group relative block h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                {/* Background Image with Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: service.bgImage }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} ${service.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-4 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <div className={`inline-flex items-center text-orange-300 font-medium group-hover:text-white group-hover:underline transition-colors`}>
                      Learn more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View All Services
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;