import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MeetTheTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  const founders = [
    {
      id: 1,
      name: 'Vincent Onu',
      role: 'Founder & CEO',
      image: 'assets/team/vincent.jpg',
      quote: "We don't just consult—we build with you.",
      story: [
        "With 10 years in corporate strategy across Europe, Vincent saw firsthand how traditional consultancies would deliver beautiful reports that collected dust on shelves. After leading digital transformation at three Fortune 500 companies, he became frustrated with the gap between strategy and execution.",
        "In 2020, during a late-night working session in an actual courthouse café (which inspired our name), Vincent sketched the BA Courthouse model on a napkin—a consultancy that would stay with clients through implementation, measuring success only by tangible business outcomes.",
        "Today, his hands-on approach shapes every engagement, ensuring our strategies don't just look good on paper but drive real growth."
      ],
      funFact: "Once coded an entire MVP for a client's project himself when their dev team fell through."
    },
    {
      id: 2,
      name: 'Amina',
      role: 'Co-Founder & CTO',
      image: 'assets/team/amina.jpg',
      quote: "Technology should serve people, not the other way around.",
      story: [
        "Amina met Vincent in 2020 when she was running a struggling fintech startup. He consulted pro bono to help her pivot, and within 9 months, the company secured Series A funding. This experience convinced her of Vincent's unique approach.",
        "What began as a mentor-mentee relationship evolved into a partnership when Amina joined to launch BA Courthouse's technology practice. Her engineering background (Cambridge, ex-Google) balances Vincent's business focus, creating our signature blend of technical depth and commercial acumen.",
        "She architected our 'Implementation Guarantee'—the promise that distinguishes us from competitors."
      ],
      funFact: "Speaks 4 languages and often conducts meetings in clients' native tongues."
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative elements matching About page */}
      <div className="hidden lg:block absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The <span className="text-blue-600">Founding</span> <span className="text-orange-500">Duo</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            How two industry veterans built BA Courthouse from a courthouse café
          </p>
        </div>

        {/* Origin story section */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Origin Story</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
            <p className="text-lg">
              <span className="font-semibold text-blue-600">2020:</span> Vincent, frustrated with conventional consulting models, begins drafting what would become BA Courthouse's manifesto during countless hours at the Birmingham Crown Court café (where he liked the quiet ambiance despite the setting).
            </p>
            <p className="text-lg">
              <span className="font-semibold text-blue-600">2022:</span> After helping turn around Amina's startup in record time, Vincent realizes his methodology works best when paired with technical excellence. Their first joint project—rescuing a failing e-commerce platform—becomes our first case study.
            </p>
            <p className="text-lg">
              <span className="font-semibold text-blue-600">2025:</span> Officially incorporated as BA Courthouse, named as an homage to both Vincent's late-night strategy sessions and our commitment to delivering justice to overpriced, underdelivering consultancies.
            </p>
          </div>
        </div>

        {/* Founders profiles */}
        <div className="space-y-20">
          {founders.map((founder) => (
            <div key={founder.id} className="flex flex-col md:flex-row gap-12 items-start">
              {/* Founder image */}
              <div className="w-full md:w-1/3 relative">
                <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-2xl border-8 border-white">
                  <img className="w-full h-full object-cover" src={founder.image} alt={founder.name} />
                </div>
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-100 text-center">
                  <p className="font-medium text-gray-900">Fun Fact</p>
                  <p className="text-gray-600 text-sm">{founder.funFact}</p>
                </div>
              </div>
              
              {/* Founder bio */}
              <div className="w-full md:w-2/3">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{founder.name}</h2>
                  <p className="text-xl text-blue-600 font-medium">{founder.role}</p>
                  <blockquote className="mt-4 pl-4 border-l-4 border-orange-500 italic text-gray-700">
                    "{founder.quote}"
                  </blockquote>
                </div>
                
                <div className="prose prose-lg text-gray-700 space-y-4">
                  {founder.story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Contributions</h4>
                  <ul className="mt-3 space-y-2">
                    {founder.id === 1 ? (
                      <>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Created the "Embedded Consulting" model</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Architect of our financial viability assessment framework</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Developed our proprietary technology audit system</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Pioneered the "Bilingual Development" approach for EU clients</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to work directly with our founders?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Vincent and Amina still lead every initial client engagement to ensure BA Courthouse's standards are met from day one.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 transition-colors duration-300"
          >
            Schedule Founder Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;