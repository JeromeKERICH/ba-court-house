import { useEffect } from 'react';
import { FaChartLine, FaUserTie, FaLaptopCode, FaHandshake } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const CareerCoachingPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
              Career Coaching for Tech Professionals
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Personalized mentoring to accelerate your career growth, whether you're starting out, 
              transitioning, or aiming for executive leadership.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#book-consultation"
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Book Free Strategy Session <FiArrowRight className="ml-2" />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3.5 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300"
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Who Benefits From Our Career Coaching
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Early-Career Techies",
                description: "Build strong foundations and avoid common pitfalls",
                icon: <FaLaptopCode className="text-orange-500 text-3xl" />
              },
              {
                title: "Mid-Level Developers",
                description: "Break through plateaus to senior positions",
                icon: <FaUserTie className="text-orange-500 text-3xl" />
              },
              {
                title: "Career Changers",
                description: "Successfully transition into tech roles",
                icon: <FaChartLine className="text-orange-500 text-3xl" />
              },
              {
                title: "Tech Leaders",
                description: "Master executive presence and strategy",
                icon: <FaHandshake className="text-orange-500 text-3xl" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-white rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 pl-16">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Our 4-Step Career Acceleration Framework
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Proven system used by 300+ tech professionals to achieve career breakthroughs
          </p>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-orange-300 z-0"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Career Assessment",
                  description: "Comprehensive evaluation of your skills, strengths, and market positioning through structured exercises and tools.",
                  duration: "Week 1-2"
                },
                {
                  step: "2",
                  title: "Goal Mapping",
                  description: "Define clear 3-month, 6-month and 12-month objectives aligned with your aspirations and market realities.",
                  duration: "Week 3"
                },
                {
                  step: "3",
                  title: "Strategy Development",
                  description: "Custom roadmap covering skill development, personal branding, networking, and interview mastery.",
                  duration: "Week 4"
                },
                {
                  step: "4",
                  title: "Execution Coaching",
                  description: "Bi-weekly sessions to maintain momentum, overcome obstacles, and negotiate offers effectively.",
                  duration: "Ongoing"
                }
              ].map((item, index) => (
                <div key={index} className="relative z-10 bg-white p-8 rounded-xl shadow-sm border-l-4 border-orange-500 flex flex-col md:flex-row">
                  <div className="md:mr-8 mb-4 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <span className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="book-consultation" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accelerate Your Tech Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free 30-minute career strategy session with our coaching team
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/vincent-onu/30min"              
              className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Schedule Now <FiArrowRight className="ml-2" />
            </a>
            <a
              href="tel:+351920565820"
              className="px-8 py-3.5 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg shadow-sm transition-all duration-300"
            >
              Call: +351 920 565 820
            </a>
          </div>
          <p className="mt-4 text-blue-200 text-sm">
            Limited spots available each month
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Career Transformations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                role: "Frontend Developer → Senior Engineer",
                quote: "The negotiation strategies helped me secure a 40% salary increase at my new role.",
                stats: "Promoted in 5 months"
              },
              {
                name: "Michael T.",
                role: "Support Engineer → DevOps Specialist",
                quote: "The technical roadmap gave me clarity on exactly which skills to develop for my transition.",
                stats: "Career change in 8 months"
              },
              {
                name: "Amina R.",
                role: "Individual Contributor → Engineering Manager",
                quote: "Leadership coaching prepared me for people management before the opportunity even arose.",
                stats: "First leadership role"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {story.stats}
                  </span>
                </div>
                <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  <p className="text-sm text-gray-500">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default CareerCoachingPage;