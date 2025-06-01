import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

      <div
        className="max-w-7xl mx-auto"
        style={{
          padding: '10px 2%',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <div
          className="lg:grid lg:grid-cols-1 items-center"
          style={{
            padding: '20px 4%',
          }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Tailored Services</span> to Accelerate Your{" "}
              <span className="text-orange-500">Business Success</span>
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                At BA Courthouse, we offer a robust suite of services designed to meet the evolving
                needs of modern businesses. Whether you're launching a startup, scaling operations,
                or optimizing workflows—we’re the team that gets it done.
              </p>
              <p>
                Our experts blend strategic thinking with practical implementation to deliver results
                you can see and measure. Every service is delivered with a deep understanding of your
                business goals, so you’re not just checking boxes—you’re building momentum.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">What We Offer</h3>
                <p className="text-gray-700">
                  Business strategy, digital transformation, process automation, and scalable tech
                  solutions—all tailored to your unique needs.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-500 mb-2">Who We Serve</h3>
                <p className="text-gray-700">
                  Startups, SMEs, and enterprise teams seeking growth, clarity, and execution in a
                  competitive market.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-600 text-center font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
