import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'IT Business Consulting', path: '/it-consulting' },
    { name: 'Project Management', path: 'project-man' },
    { name: 'Agile Coaching', path: '/agile' },
    { name: 'HR Solutions', path: '/hr-solutions' },
    { name: 'Web Development', path: '/web-app' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  const contactInfo = [
    { text: 'info@bacourthouse.com' },
    { text: '+351 920 565 820' },
    { text: 'Remote HQ: Portugal' },
  ];

  return (
    <footer className="bg-blue-600 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <h2 className='text-2xl md:text-3xl'>Ba-Court House</h2>
            </Link>
            <p className="text-blue-100">
              Empowering businesses through strategic consulting & agile coaching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-orange-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-100 hover:text-orange-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-orange-300 font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-blue-100 hover:text-orange-300 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-orange-300 font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-blue-100 hover:text-orange-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-300 font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">{item.icon}</span>
                  <span className="text-blue-100">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/book-consultation"
              className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-blue-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            &copy; {new Date().getFullYear()} BA Courthouse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-blue-100 hover:text-orange-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-100 hover:text-orange-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;