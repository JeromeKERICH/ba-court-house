import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('expertise');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const advantages = {
    expertise: {
      title: "Industry Experts",
      description: "Our team brings 10+ years of combined experience in digital transformation, with certifications in PMP, Scrum, and ITIL frameworks.",
      stats: "100+ Projects Delivered",
      icon: "👨‍💼"
    },
    approach: {
      title: "Agile Modern Solutions",
      description: "We don't just consult - we implement. Our iterative approach ensures measurable results at every stage of your transformation journey.",
      stats: "40% Faster Implementation",
      icon: "⚡"
    },
    strategy: {
      title: "Personalized Strategy",
      description: "No cookie-cutter solutions. We analyze your unique challenges to create tailored roadmaps with clear KPIs and milestones.",
      stats: "100% Custom Solutions",
      icon: "🎯"
    },
    results: {
      title: "Proven Track Record",
      description: "From startups to Fortune 500 companies, our methodologies consistently deliver ROI. See our case studies for real-world examples.",
      stats: "95% Client Retention",
      icon: "📈"
    }
  };

  const testimonials = [
    {
      quote: "BA Courthouse transformed our project delivery timeline from 6 months to just 8 weeks with their agile approach.",
      author: "Maria S., Tech Startup CEO",
      company: "Lisbon",
      rating: 5
    },
  ];

  const stats = [
    { value: "4+", label: "Years Experience", color: "text-orange-500" },
    { value: "20+", label: "Happy Clients", color: "text-blue-600" },
    { value: "10+", label: "Industries Served", color: "text-orange-500" },
    { value: "100%", label: "Client-Focused", color: "text-blue-600" }
  ];

  const credentials = [
    "Certified Scrum Masters",
    "PMP Certified Project Managers",
    "ITIL v4 Certified",
    "Google Cloud Certified"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-5 sm:py-10 lg:py-15 bg-gradient-to-b from-blue-50 to-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg font-bold text-orange-500 mb-3"
          >
            Why Work With Us
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl text-start md:text-center lg:text-center sm:text-5xl font-bold text-gray-900 mb-4"
          >
            The Competitive Edge That Sets Us Apart
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-l text-gray-600"
          >
            We don't just meet expectations we redefine what's possible for your business
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Advantages - Left Column */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Tab Navigation */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide"
            >
              {Object.keys(advantages).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                  whileHover={{ scale: activeTab === key ? 1 : 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {advantages[key].title}
                </motion.button>
              ))}
            </motion.div>

            {/* Active Tab Content */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start mb-6">
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {advantages[activeTab].title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">
                    {advantages[activeTab].stats}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-lg pl-16">
                {advantages[activeTab].description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-5 mt-10"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Testimonials - Right Column */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-10 hover:shadow-2xl transition-all"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-200">
                Client Success Stories
              </h3>
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-8"
                    variants={itemVariants}
                  >
                    <div className="absolute left-0 top-0 text-6xl text-gray-100 font-serif">"</div>
                    <blockquote className="text-gray-600 text-lg italic pl-2">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-6 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Our Professional Credentials</h3>
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-lg"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-6 h-6 mr-3 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {credential}
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="mt-8 pt-5 border-t border-blue-500 flex justify-center"
                whileHover={{ scale: 1.02 }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;