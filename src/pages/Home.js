import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-24 px-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Welcome to Our Digital Banking Suite
        </h1>
        <p className="text-xl mb-8">
          Manage and export your financial records easily and securely in PDF, Excel, or print format.
        </p>
        <a 
          href="/login" 
          className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all ease-in-out duration-300"
        >
          Get Started
        </a>
      </section>

      {/* What We Do Section */}
      <section className="mt-16 text-center px-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">What We Do</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We help businesses streamline financial management by generating accurate and reliable financial reports instantly.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Quick Financial Reporting</h3>
          <p className="text-lg text-gray-600">
            Generate comprehensive reports in seconds, reducing the time spent on manual data entry.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Exportable Reports</h3>
          <p className="text-lg text-gray-600">
            Export your reports in PDF, Excel, or print formats to ensure flexibility and ease of sharing.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Secure and Reliable</h3>
          <p className="text-lg text-gray-600">
            Your financial data is kept safe with top-notch security measures and reliability built into our platform.
          </p>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="mt-16 text-center px-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Partners</h2>
        <p className="text-lg text-gray-600 mb-8">We collaborate with leading financial institutions and technology providers to offer you the best tools for your business.</p>
        
        <div className="flex justify-center space-x-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <img src="/path/to/partner-logo1.png" alt="Partner 1" className="w-16 h-16" />
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <img src="/path/to/partner-logo2.png" alt="Partner 2" className="w-16 h-16" />
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <img src="/path/to/partner-logo3.png" alt="Partner 3" className="w-16 h-16" />
          </div>
        </div>
      </section>

      {/* Extended Footer Section */}
      <section className="mt-24 bg-gray-800 text-white py-16 text-center px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-lg">
              We’re a cutting-edge financial technology company providing businesses with secure and efficient tools for financial management.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Services</h3>
            <ul className="list-none space-y-4">
              <li><a href="/" className="text-lg hover:underline">Financial Reports</a></li>
              <li><a href="/" className="text-lg hover:underline">Export Tools</a></li>
              <li><a href="/" className="text-lg hover:underline">Security Features</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-lg">Email: support@fintechsolution.com</p>
            <p className="text-lg">Phone: +123 456 7890</p>
            <a href="/contact" className="text-lg hover:underline mt-4 inline-block">Visit Our Contact Page</a>
          </div>
        </div>
      </section>

      {/* Final Footer */}
      <section className="bg-gray-900 text-white py-6 text-center">
        <p className="text-lg">&copy; 2024 Digital Banking Suite. All rights reserved.</p>
      </section>
      
    </div>
  );
};

export default Home;
