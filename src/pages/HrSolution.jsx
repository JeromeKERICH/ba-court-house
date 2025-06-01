import { useEffect } from 'react';
import { FaUsers, FaUserTie, FaChartLine, FaHandshake } from 'react-icons/fa';
import { MdOutlineWork, MdOutlineAttachMoney } from 'react-icons/md';

const HRSolutionsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">HR Solutions</span> for the Modern Workplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your talent strategy with data-driven HR solutions that attract, develop, and retain top performers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Get HR Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-all duration-300">
                Download HR Toolkit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The <span className="text-orange-500">HR Challenges</span> Businesses Face
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-3 mt-0.5">•</div>
                  <p>Difficulty attracting skilled talent in competitive markets</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-3 mt-0.5">•</div>
                  <p>High employee turnover impacting productivity</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-3 mt-0.5">•</div>
                  <p>Outdated performance management systems</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-3 mt-0.5">•</div>
                  <p>Lack of data-driven HR decision making</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-3 mt-0.5">•</div>
                  <p>Compliance risks with evolving labor laws</p>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="assets/hr.jpg" 
                alt="HR team discussing challenges" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">HR Solutions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-blue-600" />,
                title: "Talent Acquisition",
                description: "Modern recruitment strategies including employer branding, structured interviewing, and candidate experience optimization.",
                benefits: ["Reduce time-to-hire by 40%", "Improve quality of hire", "Diversity-focused sourcing"]
              },
              {
                icon: <FaUserTie className="text-4xl text-blue-600" />,
                title: "Performance Management",
                description: "Implement continuous feedback systems and OKR frameworks to drive employee growth.",
                benefits: ["Increase productivity by 25%", "Real-time performance tracking", "Align individual & company goals"]
              },
              {
                icon: <MdOutlineWork className="text-4xl text-blue-600" />,
                title: "Employee Engagement",
                description: "Develop programs that boost morale, retention, and workplace satisfaction.",
                benefits: ["Reduce turnover by 30%", "Improve eNPS scores", "Strengthen company culture"]
              },
              {
                icon: <FaChartLine className="text-4xl text-blue-600" />,
                title: "HR Analytics",
                description: "Data-driven insights into workforce trends and HR program effectiveness.",
                benefits: ["Predict attrition risks", "Measure ROI on HR initiatives", "Benchmark against industry"]
              },
              {
                icon: <MdOutlineAttachMoney className="text-4xl text-blue-600" />,
                title: "Compensation Strategy",
                description: "Competitive pay structures and incentive programs aligned with business objectives.",
                benefits: ["Market-competitive packages", "Pay equity analysis", "Performance-based rewards"]
              },
              {
                icon: <FaHandshake className="text-4xl text-blue-600" />,
                title: "Compliance & Policies",
                description: "Ensure workplace policies meet legal requirements and best practices.",
                benefits: ["Reduce legal risks", "Streamline documentation", "Training programs"]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2">✓</div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-white">
            <div className="md:grid md:grid-cols-3 md:gap-12 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Case Study: Tech Startup Scaling</h3>
                <p className="mb-6 opacity-90">
                  "BA Courthouse transformed our HR operations, reducing recruitment costs by 35% while improving new hire retention by 50% through their data-driven talent acquisition framework."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="text-xl font-semibold">50%</div>
                    <div className="text-sm opacity-80">Higher Retention</div>
                  </div>
                  <div className="mr-4">
                    <div className="text-xl font-semibold">35%</div>
                    <div className="text-sm opacity-80">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">4.8/5</div>
                    <div className="text-sm opacity-80">Employee Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow transition-all duration-300">
                  View Full Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your <span className="text-blue-600">HR Strategy</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation to discuss customized HR solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Book Free HR Audit
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Call Us: +351 920 565 820
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRSolutionsPage;