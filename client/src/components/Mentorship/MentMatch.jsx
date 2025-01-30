import React from 'react';
import './MentMatch.css'; // Assuming you have a CSS file for styling

const MentMatch = () => {
  const mentorData = [
    {
      name: "Rohan Sharma",
      star: "4.8",
      details1: "Flipkart | Senior Data Engineer",
      details2: "| Expert in Data Structures",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder image for Rohan
    },
    {
      name: "Sanya Verma",
      star: "4.7",
      details1: "Google | Machine Learning Engineer",
      details2: "| Machine Learning Specialist",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder image for Sanya
    },
    {
      name: "Arjun Mehta",
      star: "4.9",
      details1: "Microsoft | Full Stack Developer",
      details2: "| Full Stack Developer",
      imageUrl: "https://randomuser.me/api/portraits/men/64.jpg", // Placeholder image for Arjun
    },
    {
      name: "Anjali Nair",
      star: "4.6",
      details1: "Amazon | Cloud Engineer",
      details2: "| Cloud Computing & AWS Expert",
      imageUrl: "https://randomuser.me/api/portraits/women/55.jpg", // Placeholder image for Anjali
    },
    {
      name: "Nikhil Gupta",
      star: "4.9",
      details1: "Paytm | Blockchain Developer",
      details2: "| Blockchain & Crypto Enthusiast",
      imageUrl: "https://randomuser.me/api/portraits/men/72.jpg", // Placeholder image for Nikhil
    },
    {
      name: "Megha Kapoor",
      star: "4.5",
      details1: "Facebook | UI/UX Designer",
      details2: "| UI/UX Designer & Frontend Dev",
      imageUrl: "https://randomuser.me/api/portraits/women/68.jpg", // Placeholder image for Megha
    },
    {
      name: "Vikram Rao",
      star: "4.7",
      details1: "Tesla | Product Manager",
      details2: "| Product Management Expert",
      imageUrl: "https://randomuser.me/api/portraits/men/58.jpg", // Placeholder image for Vikram
    },
    {
      name: "Priya Singh",
      star: "4.9",
      details1: "Apple | AI Researcher",
      details2: "| AI & Deep Learning Researcher",
      imageUrl: "https://randomuser.me/api/portraits/women/75.jpg", // Placeholder image for Priya
    },
  ];
  
    
  
    

  return (
    <>
      <h1 className="font-semibold text-3xl text-center text-slate-800 mb-16">Explore Our <span className="text-blue-700">Top Mentors</span></h1>
      
      <div className="profile-main">
        {mentorData.map((mentor, index) => (
          <div className="profile-card" key={index}>
            <div className="status-badge">Available</div>
            <div className="profile-image">
              <img
                src={mentor.imageUrl}
                alt={mentor.name}
              />
            </div>
            <div className="profile-info">
              <div className="name-rating">
                <h3>{mentor.name}</h3>
                <span className='rating'>⭐ {mentor.star}</span>
              </div>
              <p>
                {mentor.details1} <br />
                {mentor.details2}
              </p>
            </div>
            <button className="view-profile-button">View Profile</button>
          </div>
        ))}
      </div>
    </>
  );
  
};

export default MentMatch;
