import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutOverview = () => {
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

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 overflow-hidden py-5 sm:py-10 lg:py-15">
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
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Left column - Image */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-12 lg:mb-0"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-w-5 aspect-h-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-full object-cover"
                src="assets/hero.jpg"
                alt="BA Courthouse team collaborating"
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-lg shadow-lg border border-gray-100"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="flex-shrink-0 bg-orange-500 rounded-full p-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.6
                  }}
                >
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">4+ Years</p>
                  <p className="text-gray-600">Industry Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight"
              whileInView={{ 
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
              }}
              initial={{ opacity: 0, y: 20 }}
            >
              Strategic Partners in Your Business Growth
            </motion.h2>
            
            <motion.div 
              className="prose prose-lg text-gray-600 mb-10 space-y-4"
              variants={itemVariants}
            >
              <p>
                Founded in 2020 by Vincent Onu, BA Courthouse began as a vision to bridge the gap between 
                business strategy and technology execution. What started as a solo consultancy has grown 
                into a trusted partner for startups and enterprises across Europe.
              </p>
              <p>
                We combine <strong className="text-black-600">cutting-edge methodologies</strong> with <strong className="text-black-500">practical business acumen</strong> to deliver 
                transformative results. Unlike traditional consultants, we embed ourselves in your 
                journey, ensuring solutions are implemented not just recommended.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  Empower businesses to thrive in the digital age through agile, human-centered solutions.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-orange-300 transition-all"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  Be the catalyst for sustainable transformation in every organization we touch.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-flex sm:flex-row gap-4 text-sm"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/founders"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Our Team
                  <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-3 border border-blue-600 text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
                >
                  Case Studies
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOverview;