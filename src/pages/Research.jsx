import { useEffect } from 'react';
import { FaSearch, FaLightbulb, FaChartBar, FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ResearchSolutionDevelopmentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const caseStudies = [
        {
            title: "AI-Powered Customer Segmentation",
            result: "Increased marketing ROI by 45%",
            features: ["Behavioral Analysis", "Predictive Modeling", "Dynamic Personalization"],
            image: "/assets/r2.jpg"
        },
        {
            title: "Supply Chain Optimization",
            result: "Reduced operational costs by 30%",
            features: ["Process Mining", "Digital Twin Simulation", "Prescriptive Analytics"],
            image: "/assets/r4.jpg"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-6">
                            Research & Solution Development
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Evidence-based innovation that transforms business challenges into competitive advantages.
                        </p>
                        <div className="mt-6 md:mt-8">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-indigo-700 transition-colors duration-300"
                            >
                                Start Your Discovery Project
                                <FiExternalLink className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 md:py-10 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="lg:text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            From Insight to Implementation
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
                            Our research-driven approach uncovers hidden opportunities and delivers actionable solutions.
                        </p>
                    </div>

                    <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: <FaSearch className="text-orange-500 text-3xl md:text-4xl" />,
                                title: "Deep Discovery",
                                description: "Comprehensive analysis of your business ecosystem and pain points"
                            },
                            {
                                icon: <FaLightbulb className="text-orange-500 text-3xl md:text-4xl" />,
                                title: "Innovation Frameworks",
                                description: "Structured ideation sessions to generate breakthrough solutions"
                            },
                            {
                                icon: <FaRocket className="text-orange-500 text-3xl md:text-4xl" />,
                                title: "Rapid Prototyping",
                                description: "Tangible proofs-of-concept to validate ideas quickly"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodologies - Updated Section */}
            <section className="py-12 md:py-16 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Our Research Methodology
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-6">
                                We combine rigorous academic research methods with practical business analysis to deliver actionable insights that drive innovation.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Market Analysis",
                                    "User Research",
                                    "Data Science",
                                    "Design Thinking",
                                    "Technical Feasibility",
                                    "Solution Validation"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="bg-blue-100 rounded-full p-2 mr-3">
                                            <FaChartBar className="text-blue-600 text-sm" />
                                        </div>
                                        <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img 
                                src="/assets/R.jpg" 
                                alt="Research methodology process" 
                                className="rounded-xl shadow-lg w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Process */}
            <section className="py-5 md:py-10 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        The Research Process
                    </h2>
                    
                    <div className="grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-4">
                        {[
                            {
                                step: "1",
                                title: "Problem Definition",
                                description: "Scope challenges and success metrics"
                            },
                            {
                                step: "2",
                                title: "Data Collection",
                                description: "Quantitative & qualitative research"
                            },
                            {
                                step: "3",
                                title: "Analysis",
                                description: "Pattern recognition & insight generation"
                            },
                            {
                                step: "4",
                                title: "Solution Design",
                                description: "Concept development & validation"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center bg-white p-4 md:p-6 rounded-lg">
                                <div className="mx-auto flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold mb-3 md:mb-4">
                                    {process.step}
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{process.title}</h3>
                                <p className="text-gray-600 text-xs md:text-sm">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-5 md:py-10 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        Research Case Studies
                    </h2>
                    
                    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                        {caseStudies.map((project, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                                <div className="h-48 md:h-56 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-orange-600 font-medium mb-3 md:mb-4 text-sm md:text-base">{project.result}</p>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-blue-500 mr-2">✓</span>
                                                <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Approach */}
            <section className="py-5 md:py-10 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 md:gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Evidence-Based Innovation
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mb-6">
                                Our approach combines rigorous research with creative problem-solving:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Cross-disciplinary research teams",
                                    "Data-driven decision making",
                                    "Human-centered design principles",
                                    "Emerging technology scanning",
                                    "Continuous validation loops"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaLightbulb className="text-blue-600 mt-1 mr-2 flex-shrink-0 text-sm md:text-base" />
                                        <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-2/5">
                            <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Need Research Support?</h3>
                                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                                    Our research team can help uncover insights and opportunities.
                                </p>
                                <a 
                                    href="#contact" 
                                    className="w-full flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default ResearchSolutionDevelopmentPage;