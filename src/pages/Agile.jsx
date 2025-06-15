import { useEffect, useState } from 'react';
import { FaRocket, FaUsers, FaChartLine, FaSyncAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AgileCoachingPage = () => {
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

    const frameworkItems = [
        {
            icon: <FaRocket className="text-orange-500 text-4xl mb-4" />,
            title: "Scrum Mastery",
            description: "From basic ceremonies to advanced facilitation techniques for high-performing teams"
        },
        {
            icon: <FaUsers className="text-orange-500 text-4xl mb-4" />,
            title: "Kanban Flow",
            description: "Visualize work, limit WIP, and optimize your delivery pipeline"
        },
        {
            icon: <FaChartLine className="text-orange-500 text-4xl mb-4" />,
            title: "SAFe® Implementation",
            description: "Scale Agile across teams with proven enterprise frameworks"
        },
        {
            icon: <FaSyncAlt className="text-orange-500 text-4xl mb-4" />,
            title: "Continuous Improvement",
            description: "Build self-sufficient teams through retrospectives and metrics"
        }
    ];

    const FrameworkCard = ({ item }) => (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="text-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-12 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-6">
                            Agile Coaching for Sustainable Transformation
                        </h1>
                        <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                            Transform your teams with expert Scrum, Kanban, and SAFe® implementation that drives measurable business results.
                        </p>
                        <a 
                            href='https://calendly.com/vincent-onu/30min'
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                        >
                            Schedule Free Assessment
                        </a>
                    </div>
                </div>
            </section>
            {/* Rest of the sections remain unchanged */}
            {/* Methodology Deep Dive */}
            <section className="py-12 md:py-16 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="lg:flex gap-8 md:gap-12 items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4 md:mb-6">
                                Why Our Approach Works
                            </h2>
                            <ul className="space-y-4 md:space-y-6">
                                {[
                                    "<strong>Hybrid Methodology</strong>: Blend Scrum, Kanban, and Lean based on your needs",
                                    "<strong>Metrics-Driven</strong>: Focus on lead time, cycle time, and throughput",
                                    "<strong>Behavioral Focus</strong>: Address mindset shifts alongside processes",
                                    "<strong>Outcome-Oriented</strong>: Tie Agile practices to business KPIs"
                                ].map((item, index) => (
                                    <li key={index} className="text-base md:text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-md">
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Our Coaching Process</h3>
                            <div className="space-y-4 md:space-y-6">
                                {[
                                    {
                                        step: "1.",
                                        detail: "30-day team maturity evaluation"
                                    },
                                    {
                                        step: "2.",
                                        detail: "Tailored implementation plan"
                                    },
                                    {
                                        step: "3.",
                                        detail: "3-6 months of hands-on guidance"
                                    },
                                    {
                                        step: "4.",
                                        detail: "Gradual transition to internal coaches"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} mr-3 md:mr-4`}>
                                            {item.step}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm md:text-base">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                        Ready to Transform Your Team's Agility?
                    </h2>
                    <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto">
                        Get a free 30-minute assessment to identify your Agile maturity and improvement opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                        <a 
                            href='https://calendly.com/vincent-onu/30min'
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                        >
                            Book Free Session
                        </a>
                        <Link
                            to="/case-studies"
                            className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                        >
                            See Case Studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-12 bg-blue-50 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Our Agile Coaching Framework
                        </h2>
                        <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            We don't just teach Agile, we embed it into your organizational DNA.
                        </p>
                    </div>

                    {/* Desktop Grid View */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {frameworkItems.map((item, index) => (
                            <FrameworkCard key={index} item={item} />
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
                                {frameworkItems.map((item, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-2">
                                        <FrameworkCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {frameworkItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            
        </div>
    );
};

export default AgileCoachingPage;