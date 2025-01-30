


import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Session = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Explore Our <span className="text-blue-500">Mentorship Sessions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Mentorship Session Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-64 transition-transform transform hover:scale-105">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Explore <span className="text-blue-500">Free</span>
            </h1>
            <h5 className="text-xl text-gray-600 mb-4">Mentorship Sessions</h5>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition">
              Explore Free
            </button>
          </div>

          {/* Pro Mentorship Session Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-64 transition-transform transform hover:scale-105">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-yellow-500">15%</span> OFF
            </h1>
            <h5 className="text-xl text-gray-600 mb-4">
              On All Mentor Sessions <br />
              with <i className="fas fa-crown text-yellow-500"></i> Pro
            </h5>
            <button className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-md font-semibold hover:bg-yellow-600 transition">
              <i className="fas fa-crown mr-2"></i> Explore Pro
            </button>
          </div>

          

          {/* Limited Time Offer Box */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-64 transition-transform transform hover:scale-105">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-red-500">Limited</span> Time Offer
            </h1>
            <h5 className="text-xl text-gray-600 mb-4">Special Discount on Selected Sessions</h5>
            <button className="bg-red-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-red-600 transition">
              Get Discount
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Session;

