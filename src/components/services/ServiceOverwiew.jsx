import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-50 overflow-hidden py-5 sm:py-10 lg:py-15">
      {/* Animated decorative elements */}
      <motion.div 
        className="hidden lg:block absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [-20, 0, -20],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, -10, 0],
          y: [-20, 0, -20]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="lg:grid lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Accelerate Your Business Success
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="prose prose-lg text-gray-600 mb-10 space-y-4"
            >
              <p>
                At BA Courthouse, we offer a robust suite of services designed to meet the evolving
                needs of modern businesses. Whether you're launching a startup, scaling operations,
                or optimizing workflows. We're the team that gets it done.
              </p>
              <p>
                Our experts blend strategic thinking with practical implementation to deliver results
                you can see and measure. Every service is delivered with a deep understanding of your
                business goals, so you're not just checking boxes, you're building momentum.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            >
              <motion.div 
                variants={featureVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">What We Offer</h3>
                </div>
                <p className="text-gray-600">
                  Business strategy, digital transformation, process automation, and scalable tech
                  solutions all tailored to your unique needs.
                </p>
              </motion.div>

              <motion.div 
                variants={featureVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-orange-300 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Who We Serve</h3>
                </div>
                <p className="text-gray-600">
                  Startups, SMEs, and enterprise teams seeking growth, clarity, and execution in a
                  competitive market.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-row sm:flex-row gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
      
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="hidden lg:block lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                  <p className="text-blue-100 mb-6">
                    Our strategic approach delivers measurable results that drive growth and efficiency.
                  </p>
                  <div className="inline-flex items-center text-white font-medium">
                    Let's discuss your goals
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;