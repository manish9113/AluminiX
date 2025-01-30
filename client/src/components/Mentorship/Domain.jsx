
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Domain = () => {
  const containerData = [
    {
      title1: "Personal Branding",
      title2: "& Resume Review",
      icon: "fa-solid fa-pen-nib" // Icon class from Font Awesome
    },
    {
      title1: "Placement Preparation",
      title2: "& Mock Interview",
      icon: "fa-solid fa-briefcase", // Icon class from Font Awesome
    },
    {
      title1: "Spoken English",
      icon: "fa-solid fa-comments", // Icon class from Font Awesome
    },
 
    {
      title1: "Coding & Software",
      icon: "fa-solid fa-laptop-code", // Icon class from Font Awesome
    },
    {
      title1: "Data Science &",
      title2: "Machine Learning",
      icon: "fa-solid fa-brain", // Icon class from Font Awesome
    },
    {
      title1: "Product Management",
      title2: "& Design Thinking",
      icon: "fa-solid fa-box", // Icon class from Font Awesome
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Explore Our <span className="text-blue-500">Domains</span>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {containerData.map((container, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <i className={`${container.icon} text-4xl text-blue-500 mb-4`}></i>
              <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {container.title1}
                <br />
                {container.title2 ? container.title2 : ""}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domain;
