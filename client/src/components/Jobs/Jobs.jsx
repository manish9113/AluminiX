
import { useNavigate } from 'react-router-dom';

import React from "react";
import Navbar from "../Navbar/Navbar";
import { MdWork, MdSearch } from 'react-icons/md';
import { IoMdArrowForward } from 'react-icons/io';

const Jobs = () => {
  const navigate=useNavigate();
const Handel=(x)=>{
  if(x===1){
      navigate('./FindJobs')
  }
  else {
    navigate('/Post')
  }
  
}
  const categories = [
    { name: 'Software Development', icon: '💻', color: 'bg-gray-200', textColor: 'text-gray-800' },
    { name: 'Data Science', icon: '📊', color: 'bg-gray-200', textColor: 'text-gray-800' },
    { name: 'Graphic Design', icon: '🎨', color: 'bg-gray-200', textColor: 'text-gray-800' },
    { name: 'Marketing', icon: '📢', color: 'bg-gray-200', textColor: 'text-gray-800' },
    { name: 'Finance', icon: '💰', color: 'bg-gray-200', textColor: 'text-gray-800' },
    { name: 'Explore all', icon: '➡️', color: 'bg-white', textColor: 'text-blue-600' },
  ];

  const logos = {
    DataAnalyst: ['📊', '🏦', '🏢', '💼'],
    Frontend: ['🌐', '📱', '🖥️', '💻'],
    FullStack: ['🛠️', '📦', '📈', '⚙️'],
    ProductManagement: ['🎯', '📝', '💡', '📋']
  };

  const roles = [
    { title: 'Data Analyst', openings: '370+', logoSet: logos.DataAnalyst },
    { title: 'Frontend', openings: '250+', logoSet: logos.Frontend },
    { title: 'Full-Stack Roles', openings: '300+', logoSet: logos.FullStack },
    { title: 'Product Management', openings: '246+', logoSet: logos.ProductManagement },
  ];

  return (
    <div className="bg-gradient-to-r from-red-50 via-sky-200 to-purple-100 min-h-screen">
     <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>  

      <header className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Discover Your Next <span className="text-blue-600">Career</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore top opportunities and connect with leading companies.
          </p>
          <form className="flex justify-center mb-8">
            <input
              className="w-full max-w-md p-3 rounded-lg border border-gray-300 shadow-sm"
              type="text"
              placeholder="Search for jobs..."
            />
          </form>
          <div className="flex justify-center space-x-4">
            <button onClick={()=>Handel(1)}  Name='find'  className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">Find Jobs</button>
            <button  onClick={()=>Handel(2)}  name="post" className="bg-gray-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">Post Jobs</button>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 bg-blue-50">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Explore <span className="text-blue-600">Categories</span>
        </h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${category.color}`}
            >
              <div className="flex items-center justify-center mb-4">
                <span className={`text-3xl ${category.textColor}`}>{category.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Role</h2>
          <p className="text-gray-600">Browse through top roles tailored to your skills and interests.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{role.title}</h3>
                  <p className="text-gray-500">{role.openings} Openings</p>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <IoMdArrowForward size={24} />
                </a>
              </div>
              <div className="flex space-x-2">
                {role.logoSet.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
