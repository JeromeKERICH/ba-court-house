import { useEffect } from 'react';
import { FaSearch, FaLightbulb, FaChartBar, FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ResearchSolutionDevelopmentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const methodologies = [
        { name: "Market Research", tools: "SWOT Analysis, Competitor Benchmarking, Trend Forecasting" },
        { name: "User Research", tools: "Journey Mapping, Persona Development, Usability Testing" },
        { name: "Technical Feasibility", tools: "Proof of Concepts, Architecture Reviews, Tech Stack Analysis" },
        { name: "Data Analysis", tools: "Predictive Modeling, KPI Framework, Business Intelligence" },
        { name: "Solution Design", tools: "Wireframing, Prototyping, Requirements Specification" },
    ];

    const caseStudies = [
        {
            title: "AI-Powered Customer Segmentation",
            result: "Increased marketing ROI by 45%",
            features: ["Behavioral Analysis", "Predictive Modeling", "Dynamic Personalization"]
        },
        {
            title: "Supply Chain Optimization",
            result: "Reduced operational costs by 30%",
            features: ["Process Mining", "Digital Twin Simulation", "Prescriptive Analytics"]
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                            Research & Solution Development
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Evidence-based innovation that transforms business challenges into competitive advantages.
                        </p>
                        <div className="mt-8">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-indigo-700 transition-colors duration-300"
                            >
                                Start Your Discovery Project
                                <FiExternalLink className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            From Insight to Implementation
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Our research-driven approach uncovers hidden opportunities and delivers actionable solutions.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: <FaSearch className="text-orange-500 text-4xl" />,
                                title: "Deep Discovery",
                                description: "Comprehensive analysis of your business ecosystem and pain points"
                            },
                            {
                                icon: <FaLightbulb className="text-orange-500 text-4xl" />,
                                title: "Innovation Frameworks",
                                description: "Structured ideation sessions to generate breakthrough solutions"
                            },
                            {
                                icon: <FaRocket className="text-orange-500 text-4xl" />,
                                title: "Rapid Prototyping",
                                description: "Tangible proofs-of-concept to validate ideas quickly"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodologies */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Our Methodologies
                    </h2>
                    
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                        {methodologies.map((method, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <div className="text-blue-600 fbnt-medium mb-2">{method.name}</div>
                                <div className="text-sm text-gray-600">{method.tools}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Process */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        The Research Process
                    </h2>
                    
                    <div className="grid gap-8 md:grid-cols-4">
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
                            <div key={index} className="text-center">
                                <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold mb-4">
                                    {process.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                                <p className="text-gray-600 text-sm">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Research Case Studies
                    </h2>
                    
                    <div className="grid gap-8 md:grid-cols-2">
                        {caseStudies.map((project, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-orange-600 font-medium mb-4">{project.result}</p>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-blue-500 mr-2">✓</span>
                                                <span className="text-gray-700">{feature}</span>
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
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Evidence-Based Innovation
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
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
                                        <FaLightbulb className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-2/5">
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Research Support?</h3>
                                <p className="text-gray-600 mb-6">
                                    Our research team can help uncover insights and opportunities.
                                </p>
                                <a 
                                    href="#contact" 
                                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-blue-600 transition-colors duration-300"
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