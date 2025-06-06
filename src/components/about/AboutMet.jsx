import { FaLaptopCode, FaMoneyBillWave, FaHospital, FaShoppingCart, FaTruckMoving, FaToolbox, FaSchool } from 'react-icons/fa';
import { FaBagShopping, FaHouse, FaPowerOff } from 'react-icons/fa6';
import { FiSearch, FiMap, FiZap } from 'react-icons/fi';

const ProcessAndIndustriesSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Unified header */}
          <div className="md:text-center text-start mb-5">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Industry-Specific Solutions <br/> Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep sector expertise with our agile transformation framework to deliver measurable results.
            </p>
          </div>

          {/* Industries We Serve - With React Icons */}
          <div className="mb-28">
  <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">
    Industries We Transform
  </h3>
  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
    {[
      { 
        name: "Tech Startups", 
        icon: <FaLaptopCode className="w-full h-full" />,
        description: "Accelerate product development and scaling",
        color: "blue"
      },
      { 
        name: "Financial Services", 
        icon: <FaMoneyBillWave className="w-full h-full" />,
        description: "Modernize legacy systems securely",
        color: "blue"
      }, 
      { 
        name: "Healthcare", 
        icon: <FaHospital className="w-full h-full" />,
        description: "Improve patient systems with digital tools",
        color: "blue"
      },
      { 
        name: "E-Commerce", 
        icon: <FaShoppingCart className="w-full h-full" />,
        description: "Optimize operations for peak performance",
        color: "blue"
      }, 
      {
        name: "Energy",
        icon: <FaPowerOff className="w-full h-full" />,
        description: "Innovate with sustainable technology solutions",
        color: "blue"
      },
      {
        name: "Logistics & Supply-Chain",
        icon: <FaTruckMoving className="w-full h-full" />,
        description: "Streamline processes for efficiency",
        color: "blue"
      },
      {
        name: "Engineering Services", 
        icon: <FaToolbox className="w-full h-full" />,
        description: "Enhance project delivery with digital tools",
        color: "blue"
      },
      {
        name: "Education ",
        icon: <FaSchool className="w-full h-full" />,
        description: "Transform learning experiences with technology",
        color: "blue"
      },
      {
        name: "Fashion ",
        icon: <FaBagShopping className="w-full h-full" />,
        description: "Revolutionize retail with digital solutions",
        color: "blue"
      },
      {
        name: "Rental/Leasing",
        icon: <FaHouse className="w-full h-full"  />,
        description: "Optimize property management with tech",
        color: "blue"
      }
    ].map((industry, index) => (
      <div 
        key={index} 
        className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group"
      >
        <div className={`text-4xl mb-5 p-3 rounded-full ${industry.color === 'orange' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} w-16 h-16 flex items-center justify-center mx-auto`}>
          {industry.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
        <p className="text-gray-600">{industry.description}</p>
      </div>
    ))}
  </div>
</div>

          {/* Our Approach - With React Icons */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">
              Our Transformation Process
            </h3>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-1 bg-gradient-to-r from-orange-300 to-blue-300 z-0"></div>
              
              {[
                {
                  title: "Discovery Phase",
                  description: "Comprehensive analysis of your business needs, pain points, and opportunities through workshops and data assessment.",
                  icon: <FiSearch className="w-full h-full" />,
                  color: "blue"
                },
                {
                  title: "Tailored Roadmap",
                  description: "Custom digital transformation strategy aligned with your specific KPIs and organizational goals.",
                  icon: <FiMap className="w-full h-full" />,
                  color: "orange"
                },
                {
                  title: "Agile Execution",
                  description: "Iterative delivery with continuous feedback loops and measurable milestones for guaranteed results.",
                  icon: <FiZap className="w-full h-full" />,
                  color: "blue"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`relative z-10 bg-white p-8 rounded-xl shadow-md border-t-4 ${step.color === 'orange' ? 'border-orange-500' : 'border-blue-500'} hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`text-4xl mb-5 p-3 rounded-full ${step.color === 'orange' ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} w-16 h-16 flex items-center justify-center mx-auto`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Unified CTA */}
          <div className="mt-20 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your business operations?
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Start Your Transformation Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessAndIndustriesSection;