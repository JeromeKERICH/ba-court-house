import { useEffect } from 'react';
import { FaServer, FaRobot, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const SoftwareDevelopmentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const caseStudies = [
        {
            title: "Enterprise SaaS Platform",
            result: "Reduced operational costs by 40%",
            features: ["Microservices Architecture", "Auto-scaling", "Multi-tenant Design"]
        },
        {
            title: "AI-Powered Analytics System",
            result: "Improved decision accuracy by 65%",
            features: ["Predictive Modeling", "Real-time Processing", "Custom Dashboards"]
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                            Software Development
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Custom software solutions engineered for performance, scalability, and business transformation.
                        </p>
                        <div className="mt-8">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-blue-700 transition-colors duration-300"
                            >
                                Get Your Free Technical Consultation
                                <FiExternalLink className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 lg:py-10 bg-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Enterprise-Grade Software Solutions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            We architect software systems that solve complex business challenges while being maintainable, 
                            scalable, and secure.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: <FaServer className="text-orange-500 text-4xl" />,
                                title: "System Architecture",
                                description: "Designing robust foundations for complex applications with clean architecture principles."
                            },
                            {
                                icon: <FaRobot className="text-orange-500 text-4xl" />,
                                title: "AI Integration",
                                description: "Enhancing applications with machine learning and intelligent automation."
                            },
                            {
                                icon: <FaChartLine className="text-orange-500 text-4xl" />,
                                title: "Performance Engineering",
                                description: "Optimizing for speed, reliability, and efficient resource utilization."
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

            

            {/* Development Process */}
            <section className="py-5 lg:py-10 bg-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Our Development Process
                    </h2>
                    
                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            {
                                step: "1",
                                title: "Discovery",
                                description: "Requirement analysis & technical planning"
                            },
                            {
                                step: "2",
                                title: "Design",
                                description: "System architecture & prototyping"
                            },
                            {
                                step: "3",
                                title: "Development",
                                description: "Agile sprints with continuous integration"
                            },
                            {
                                step: "4",
                                title: "Deployment",
                                description: "CI/CD pipelines & cloud provisioning"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold mb-4">
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
            <section className="py-5 lg:py-10 bg-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Software Success Stories
                    </h2>
                    
                    <div className="grid gap-8 md:grid-cols-2">
                        {caseStudies.map((project, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-orange-500 font-medium mb-4">{project.result}</p>
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

            {/* Security & Compliance */}
            <section className="py-5 lg:py-10 bg-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Secure by Design Approach
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                We implement security at every stage of the SDLC:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Threat Modeling",
                                    "Static/Dynamic Code Analysis",
                                    "OWASP Compliance",
                                    "Data Encryption",
                                    "Regular Security Audits"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaShieldAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-2/5">
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Custom Software?</h3>
                                <p className="text-gray-600 mb-6">
                                    Discuss your project with our solution architects.
                                </p>
                                <a 
                                    href="https://calendly.com/vincent-onu/30min"                                     
                                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Get Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default SoftwareDevelopmentPage;