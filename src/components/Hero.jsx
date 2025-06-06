import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show chat bubble after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [isDismissed, setIsDismissed] = useState(false);

{!isDismissed && (
  <div className="fixed bottom-6 right-6 z-50">
    <button onClick={() => setIsDismissed(true)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
      ×
    </button>
    {/* Rest of chat bubble */}
  </div>
)}

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Floating WhatsApp CTA */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <a
          href="https://wa.me/351920565820"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-xl hover:bg-green-600 transition-colors duration-300 animate-pulse"
          aria-label="Chat with us on WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <div className={`absolute right-20 bottom-0 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm whitespace-nowrap">Need help? Chat with us!</p>
          <div className="absolute right-0 top-1/2 w-2 h-2 bg-blue-600 transform rotate-45 -translate-y-1/2 translate-x-1"></div>
        </div>
      </div>

      {/* Hero content remains the same as before */}
      <div className="max-w-5xl mx-auto">
        <div className="relative z-10 pb-12 pt-16 sm:pt-32 lg:pt-25 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Empowering Businesses Through <span className="text-blue-600">Strategic Consulting</span> 
              <br className="hidden lg:block"/> & <span className="text-orange-500">Agile Coaching</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              We help startups, professionals, and scaling businesses transform digitally 
              and operate smarter with modern methodologies.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href='https://calendly.com/vincent-onu/30min'
                className="px-8 py-3.5 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover-scale"
              >
                Book Free Consultation
              </a>
              <Link
                to="/services"
                className="px-8 py-3.5 text-base font-medium text-blue-600 bg-white hover:bg-blue-50 rounded-lg border-2 border-blue-600 transition-all duration-300 hover-scale"
              >
                Explore Services
              </Link>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;