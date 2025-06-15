import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

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
    <section 
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(/assets/hero1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70 z-0"></div>
      
      {/* Hero content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="px-4 sm:px-6 lg:px-8 py-10 sm:py-32 lg:py-20"
        >
          <div className="text-center">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-blue-600"
            >
              EMPOWERING BUSINESS THROUGH <motion.span 
                className="text-gray-600"
                whileHover={{ scale: 1.05 }}
              >Strategic Consulting &</motion.span> 
              <br className="hidden lg:block"/> <motion.span 
                className="text-gray-600"
                whileHover={{ scale: 1.05 }}
              >Agile Coaching</motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            >
              We help startups, professionals, and scaling businesses transform digitally 
              and operate smarter with modern methodologies.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-5 flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a 
                href='https://calendly.com/vincent-onu/30min'
                className="px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/services"
                  className="px-8 py-3.5 text-base font-medium text-blue-600 bg-white hover:bg-blue-50 rounded-lg border-2 border-blue-600 transition-all duration-300 block"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 sm:mt-20 lg:mt-24 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-4xl">
              <motion.div 
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  x: [-10, 0, -10]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default HeroSection;