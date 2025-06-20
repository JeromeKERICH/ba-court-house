import React, { useEffect } from 'react'
import ServiceOverview from '../components/services/ServiceOverwiew';
import CoreServices from '../components/Services';
import ServiceBody from '../components/services/ServicesBody';
import ServiceCTA from '../components/services/ServiceCTA';
import FAQSection from '../components/services/ServiceFaqs';
import ProcessSection from '../components/services/SectionProcess';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

  return (
    <div>
      <ServiceOverview/>
      <ServiceBody/>
      <ServiceCTA/>
      <ProcessSection/>
      <FAQSection/>
    </div>
  )
}

export default Services
