import { useEffect, useState } from 'react';
import { FaProjectDiagram, FaChartLine, FaUsers, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectManagementPage = () => {
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
            setActiveIndex((prev) => (prev === 3 ? 0 : prev + 1));
        } else if (distance < -5) {
            setActiveIndex((prev) => (prev === 0 ? 3 : prev - 1));
        }
    };

    const processSteps = [
        {
            title: "Planning & Scoping",
            description: "Define objectives, deliverables, and success metrics",
            icon: <FaClipboardCheck className="w-full h-full" />,
            color: "blue"
        },
        {
            title: "Team Assembly",
            description: "Identify stakeholders and build project team",
            icon: <FaUsers className="w-full h-full" />,
            color: "blue"
        },
        {
            title: "Execution",
            description: "Monitor progress with agile tracking systems",
            icon: <FaProjectDiagram className="w-full h-full" />,
            color: "blue"
        },
        {
            title: "Review & Handoff",
            description: "Conduct retrospectives and transition ownership",
            icon: <FaChartLine className="w-full h-full" />,
            color: "blue"
        }
    ];

    const ProcessCard = ({ step }) => (
        <div className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${step.color === 'orange' ? 'border-orange-500' : 'border-blue-500'} hover:shadow-md transition-all h-full`}>
            <div className={`text-2xl md:text-3xl mb-4 ${step.color === 'orange' ? 'text-orange-500' : 'text-blue-500'}`}>
                {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-orange-600 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
        </div>
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-12 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3 md:mb-4">
                            Professional Project Management
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            PMP-certified leadership to deliver your projects on time, within scope, and under budget.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* What We Offer */}
            <section className="py-12 md:py-16 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="lg:text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                            End-to-End Project Leadership
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            We implement industry-standard methodologies tailored to your organization's needs.
                        </p>
                    </div>

                    <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                                    <FaProjectDiagram className="text-blue-600 text-xl md:text-2xl" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Comprehensive Project Oversight</h3>
                            </div>
                            <ul className="space-y-3 md:space-y-4 text-gray-600">
                                {[
                                    "Initiation to closure management",
                                    "Triple constraint optimization (time/cost/scope)",
                                    "Risk assessment and mitigation planning",
                                    "Stakeholder communication frameworks"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-orange-500 mr-2">•</span>
                                        <span className="text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                                    <FaChartLine className="text-blue-600 text-xl md:text-2xl" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Methodologies We Implement</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {[
                                    {
                                        title: "Agile",
                                        subtitle: "Scrum, Kanban",
                                        bg: "orange-50",
                                        border: "orange-100",
                                        text: "orange-700",
                                        subtext: "orange-600"
                                    },
                                    {
                                        title: "Waterfall",
                                        subtitle: "Traditional PM",
                                        bg: "blue-50",
                                        border: "blue-100",
                                        text: "blue-700",
                                        subtext: "blue-600"
                                    },
                                    {
                                        title: "Hybrid",
                                        subtitle: "Tailored blends",
                                        bg: "blue-50",
                                        border: "blue-100",
                                        text: "blue-700",
                                        subtext: "blue-600"
                                    },
                                    {
                                        title: "Lean",
                                        subtitle: "Waste reduction",
                                        bg: "orange-50",
                                        border: "orange-100",
                                        text: "orange-700",
                                        subtext: "orange-600"
                                    }
                                ].map((method, index) => (
                                    <div key={index} className={`bg-${method.bg} p-2 md:p-3 rounded-lg border border-${method.border}`}>
                                        <h4 className={`font-medium text-${method.text} text-sm md:text-base`}>{method.title}</h4>
                                        <p className={`text-xs md:text-sm text-${method.subtext}`}>{method.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-5 md:py-15 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                        Our 4-Phase Project Management Approach
                    </h2>
                    
                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-4 gap-6 md:gap-8">
                        {processSteps.map((step, index) => (
                            <ProcessCard key={index} step={step} />
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
                                {processSteps.map((step, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <ProcessCard step={step} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {processSteps.map((_, index) => (
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

            

            
        </div>
    );
};

export default ProjectManagementPage;