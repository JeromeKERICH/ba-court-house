import { useEffect, useState } from 'react';
import { FaCode, FaMobileAlt, FaServer, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const WebAppDevelopmentPage = () => {
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
            setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
        } else if (distance < -5) {
            setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
        }
    };

    const technologies = [
        { name: "Frontend", tools: "React, Next.js, Vue, Angular, Tailwind CSS" },
        { name: "Backend", tools: "Node.js, Python/Django, Ruby on Rails, .NET" },
        { name: "Mobile", tools: "React Native, Flutter, Swift, Kotlin" },
        { name: "Database", tools: "PostgreSQL, MongoDB, Firebase, AWS DynamoDB" },
        { name: "DevOps", tools: "Docker, Kubernetes, AWS, GitHub Actions" },
    ];

    const caseStudies = [
        {
            title: "E-Commerce Platform",
            result: "Increased conversion by 35%",
            features: ["PWAs", "Headless CMS", "Payment Gateway Integration"],
            image: "/images/ecommerce-platform.jpg"
        },
        {
            title: "Healthcare Portal",
            result: "Reduced load time by 60%",
            features: ["HIPAA Compliance", "Telemedicine API", "Patient Dashboard"],
            image: "/images/healthcare-portal.jpg"
        }
    ];

    const features = [
        {
            icon: <FaCode className="text-orange-500 text-4xl" />,
            title: "Full-Cycle Development",
            description: "From concept to deployment and maintenance - we handle every stage of your project lifecycle.",
            image: "/assets/w1.jpg",
            alt: "Development process from planning to deployment"
        },
        {
            icon: <FaMobileAlt className="text-orange-500 text-4xl" />,
            title: "Cross-Platform Solutions",
            description: "Build once, deploy everywhere with our hybrid and native app development expertise.",
            image: "/assets/w2.jpg",
            alt: "Devices showing responsive design"
        },
        {
            icon: <FaChartLine className="text-orange-500 text-4xl" />,
            title: "Performance Optimized",
            description: "Applications engineered for speed, scalability, and seamless user experiences.",
            image: "/assets/w3.jpg",
            alt: "Performance metrics dashboard"
        }
    ];

    const FeatureCard = ({ feature }) => (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="h-48 overflow-hidden">
                <img 
                    src={feature.image} 
                    alt={feature.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-8 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-6">
                            Web & App Development
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Custom digital solutions built with cutting-edge technologies to drive growth and efficiency.
                        </p>
                        <div className="mt-6 md:mt-8">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                            >
                                Get Your Free Project Assessment
                                <FiExternalLink className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-5 md:py-10 lg:py-15 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="lg:text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Transform Your Digital Presence
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
                            In today's competitive landscape, having a high-performing digital product isn't optional. 
                            We engineer solutions that combine aesthetic appeal with technical excellence.
                        </p>
                    </div>

                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} />
                        ))}
                    </div>
                    
                    {/* Mobile Carousel View */}
                    <div className="md:hidden mt-8">
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
                                {features.map((feature, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <FeatureCard feature={feature} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {features.map((_, index) => (
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

            {/* Technology Stack */}
            <section className="py-5 md:py-10 lg:py-10 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        Our Technology Stack
                    </h2>
                    
                    <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                                <div className="text-blue-500 font-medium mb-2">{tech.name}</div>
                                <div className="text-xs md:text-sm text-gray-600">{tech.tools}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-5 md:py-10 lg:py-10 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        Success Stories
                    </h2>
                    
                    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                        {caseStudies.map((project, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                               
                                <div className="p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-blue-600 font-medium mb-3 md:mb-4">{project.result}</p>
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

            {/* Security & Compliance */}
            <section className="py-5 md:py-10 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                                Security-First Development
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mb-6">
                                We implement enterprise-grade security measures at every layer:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "OWASP Top 10 Compliance",
                                    "Regular Penetration Testing",
                                    "GDPR & HIPAA Ready Solutions",
                                    "End-to-End Encryption",
                                    "Secure CI/CD Pipelines"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaShieldAlt className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-2/5">
                            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Ready to Build Something Amazing?</h3>
                                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                                    Get a free 30-minute consultation with our technical architect.
                                </p>
                                <a 
                                    href="https://calendly.com/vincent-onu/30min"                  
                                    className="w-full flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300"
                                >
                                    Schedule Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default WebAppDevelopmentPage;