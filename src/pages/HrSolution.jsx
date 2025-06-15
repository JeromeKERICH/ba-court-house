import { useEffect, useState } from 'react';
import { FaUsers, FaUserTie, FaChartLine, FaHandshake } from 'react-icons/fa';
import { MdOutlineWork, MdOutlineAttachMoney } from 'react-icons/md';

const HRSolutionsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        if (distance > 5) {
            setActiveIndex((prev) => (prev === 5 ? 0 : prev + 1));
        } else if (distance < -5) {
            setActiveIndex((prev) => (prev === 0 ? 5 : prev - 1));
        }
    };

    const solutions = [
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
    ];

    const SolutionCard = ({ solution }) => (
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
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
    );

    return (
        <div className="bg-blue-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-12 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-6">
                            HR Solutions for the Modern Workplace
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
                            Transform your talent strategy with data-driven HR solutions that attract, develop, and retain top performers.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                            <a 
                                href='https://calendly.com/vincent-onu/30min' 
                                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                            >
                                Get HR Consultation
                            </a>
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 text-sm md:text-base">
                                Download HR Toolkit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-12 md:py-16 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4 md:mb-6">
                                The HR Challenges Businesses Face
                            </h2>
                            <ul className="space-y-3 md:space-y-4 text-gray-600">
                                {[
                                    "Difficulty attracting skilled talent in competitive markets",
                                    "High employee turnover impacting productivity",
                                    "Outdated performance management systems",
                                    "Lack of data-driven HR decision making",
                                    "Compliance risks with evolving labor laws"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5">•</div>
                                        <p className="text-sm md:text-base">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 lg:mt-0">
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
            <section className="py-5 md:py-10 lg:py-15 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        Our HR Solutions
                    </h2>
                    
                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {solutions.map((solution, index) => (
                            <SolutionCard key={index} solution={solution} />
                        ))}
                    </div>
                    
                    {/* Mobile Carousel View */}
                    <div className="md:hidden">
                        <div 
                            className="relative overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div 
                                className="flex transition-transform duration-300 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {solutions.map((solution, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <SolutionCard solution={solution} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {solutions.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-12 md:py-16 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 md:p-8 lg:p-12 text-white">
                        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 lg:gap-12 items-center">
                            <div className="md:col-span-2">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Case Study: Tech Startup Scaling</h3>
                                <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base">
                                    "BA Courthouse transformed our HR operations, reducing recruitment costs by 35% while improving new hire retention by 50% through their data-driven talent acquisition framework."
                                </p>
                                <div className="flex flex-wrap gap-4 md:gap-6">
                                    <div>
                                        <div className="text-lg md:text-xl font-semibold">50%</div>
                                        <div className="text-xs md:text-sm opacity-80">Higher Retention</div>
                                    </div>
                                    <div>
                                        <div className="text-lg md:text-xl font-semibold">35%</div>
                                        <div className="text-xs md:text-sm opacity-80">Cost Reduction</div>
                                    </div>
                                    <div>
                                        <div className="text-lg md:text-xl font-semibold">4.8/5</div>
                                        <div className="text-xs md:text-sm opacity-80">Employee Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg shadow transition-all duration-300 text-sm md:text-base">
                                    View Full Case Study
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-orange-50 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-6">
                        Ready to Transform Your HR Strategy?
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                        Our HR experts will help you build a workforce that drives business success.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                        <a 
                            href='https://calendly.com/vincent-onu/30min'
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                        >
                            Get Started Today
                        </a>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 text-sm md:text-base">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HRSolutionsPage;