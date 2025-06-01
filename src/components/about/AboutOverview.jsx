import { Link } from 'react-router-dom';

const AboutOverview = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-10 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Image */}
          <div className="relative mb-12 lg:mb-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-w-5 aspect-h-4">
              <img
                className="w-full h-full object-cover"
                src="assets/hero.jpg" // Replace with your team/office image
                alt="BA Courthouse team collaborating"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-500 rounded-full p-2">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">10+ Years</p>
                  <p className="text-gray-600">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Strategic Partners</span> in Your{" "}
              <span className="text-orange-500">Business Growth</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Founded in 2015 by Vincent Onu, BA Courthouse began as a vision to bridge the gap between 
                business strategy and technology execution. What started as a solo consultancy has grown 
                into a trusted partner for startups and enterprises across Europe.
              </p>
              <p>
                We combine <strong>cutting-edge methodologies</strong> with <strong>practical business acumen</strong> to deliver 
                transformative results. Unlike traditional consultants, we embed ourselves in your 
                journey, ensuring solutions are implemented—not just recommended.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  Empower businesses to thrive in the digital age through agile, human-centered solutions.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-500 mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  Be the catalyst for sustainable transformation in every organization we touch.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/meet-the-team"
                className="px-6 py-3 border border-transparent text-center font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Meet Our Team
              </Link>
              <Link
                to="/case-studies"
                className="px-6 py-3 border border-blue-600 text-center font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;