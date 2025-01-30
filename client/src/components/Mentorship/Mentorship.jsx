
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Domain from './Domain';
import Session from './Session';
import MentMatch from './MentMatch';
import Navbar from '../Navbar/Navbar';

const Mentorship = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="fixed top-0 left-0 w-full z-50 ">
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative text-black-900 mt-12 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            <span className="text-blue-900">Empower</span> Your Future
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Connect with industry experts and take the next step in your career with personalized guidance.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-300 text-gray-900 py-3 px-6 rounded-md text-lg font-semibold hover:bg-yellow-400 transition animate__animated animate__fadeIn animate__delay-3s">
              <i className="fas fa-search mr-2"></i> Find a Mentor
            </button>
            <button className="bg-green-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-600 transition animate__animated animate__fadeIn animate__delay-4s">
              Be a Mentor
            </button>
          </div>
        </div>
      </section>

      <div >
          <Domain />
        </div>


      {/* Additional Sections */}
      <div className="container mx-auto px-4 py-16">
       
        <Session />
        <MentMatch />
      </div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <p className="text-gray-600 mb-4">“The mentorship program has been transformative for my career. The guidance I received was invaluable!”</p>
              <h4 className="font-semibold text-gray-800">Alex Johnson</h4>
              <p className="text-gray-500">Software Engineer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <p className="text-gray-600 mb-4">“Connecting with industry leaders has opened doors I never thought possible. Highly recommend!”</p>
              <h4 className="font-semibold text-gray-800">Sara Lee</h4>
              <p className="text-gray-500">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </section>
       {/* Features Section */}
       <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-chalkboard-teacher text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Connect with experienced mentors to get tailored advice and support.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-network-wired text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expansive Network</h3>
              <p className="text-gray-600">Expand your professional network and explore new opportunities.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-calendar-check text-4xl text-purple-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Book sessions at times that suit you with our easy-to-use platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 Mentorship Platform. All rights reserved.</p>
          <p className="text-sm">Contact us: <a href="mailto:info@mentorshipplatform.com" className="text-blue-400 hover:underline">info@mentorshipplatform.com</a></p>
        </div>
      </footer>
      
     
    </div>
  );
};

export default Mentorship;
