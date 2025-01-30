
import React, { useState } from "react";
import { FaIndustry, FaGraduationCap, FaSearch, FaLinkedin, FaGlobe, FaStar } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";


const dummyStories = [
  {
    id: 1,
    name: "John Doe",
    graduationYear: 2015,
    industry: "Software Development",
    story:
      "John started his journey at XYZ Corp and climbed up to become a Senior Developer at Google.",
    image: "/assets/person/img11.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://johndoe.com",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Jane Smith",
    graduationYear: 2018,
    industry: "Mechanical Engineering",
    story:
      "Jane is now working as a lead engineer at Tesla after gaining extensive experience at several startups.",
    image: "/assets/person/img12.jpg",
    linkedin: "https://linkedin.com/in/janesmith",
    website: "https://janesmith.com",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Alice Johnson",
    graduationYear: 2020,
    industry: "Data Science",
    story:
      "Alice contributed to a groundbreaking project at XYZ Corp that made headlines worldwide.",
    image: "/assets/person/img14.jpg",
    linkedin: "https://linkedin.com/in/alicejohnson",
    website: "https://alicejohnson.com",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Mark Spencer",
    graduationYear: 2016,
    industry: "Civil Engineering",
    story:
      "Mark played a key role in designing sustainable infrastructure projects at ABC Construction.",
    image: "/assets/person/img13.jpg",
    linkedin: "https://linkedin.com/in/markspencer",
    website: "https://markspencer.com",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Sophie Williams",
    graduationYear: 2019,
    industry: "Cybersecurity",
    story:
      "Sophie is a leading expert at DEF Cybertech, protecting top global organizations from cyber threats.",
    image: "/assets/person/img15.jpg",
    linkedin: "https://linkedin.com/in/sophiewilliams",
    website: "https://sophiewilliams.com",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Michael Brown",
    graduationYear: 2017,
    industry: "Electrical Engineering",
    story:
      "Michael is an innovator at GHI Electronics, leading cutting-edge research in smart devices.",
    image: "/assets/person/img16.jpg",
    linkedin: "https://linkedin.com/in/michaelbrown",
    website: "https://michaelbrown.com",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Emma Clark",
    graduationYear: 2015,
    industry: "Artificial Intelligence",
    story:
      "Emma co-founded an AI startup that provides revolutionary solutions for the healthcare industry.",
    image: "/assets/person/img19.jpg",
    linkedin: "https://linkedin.com/in/emmaclark",
    website: "https://emmaclark.com",
    rating: 4.8,
  },
  {
    id: 8,
    name: "David Wright",
    graduationYear: 2014,
    industry: "Robotics",
    story:
      "David has designed advanced robotic systems for space exploration missions at NASA.",
    image: "/assets/person/img20.jpg",
    linkedin: "https://linkedin.com/in/davidwright",
    website: "https://davidwright.com",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Sarah Taylor",
    graduationYear: 2021,
    industry: "Biomedical Engineering",
    story:
      "Sarah is working on innovative medical devices that improve patient care at top hospitals.",
    image: "/assets/person/img12.jpg",
    linkedin: "https://linkedin.com/in/sarahtaylor",
    website: "https://sarahtaylor.com",
    rating: 4.8,
  },
  {
    id: 10,
    name: "James Lee",
    graduationYear: 2013,
    industry: "Cloud Computing",
    story:
      "James leads cloud infrastructure at AWS, shaping the future of cloud technology.",
    image: "/assets/person/img14.jpg",
    linkedin: "https://linkedin.com/in/jameslee",
    website: "https://jameslee.com",
    rating: 4.9,
  },
  {
    id: 11,
    name: "Mia Roberts",
    graduationYear: 2016,
    industry: "Data Science",
    story:
      "Mia has pioneered data-driven solutions for Fortune 500 companies at JKL Analytics.",
    image: "/assets/person/img15.jpg",
    linkedin: "https://linkedin.com/in/miaroberts",
    website: "https://miaroberts.com",
    rating: 4.8,
  },
  {
    id: 12,
    name: "Robert Johnson",
    graduationYear: 2018,
    industry: "Environmental Engineering",
    story:
      "Robert works on sustainable water management systems for developing countries.",
    image: "/assets/person/img14.jpg",
    linkedin: "https://linkedin.com/in/robertjohnson",
    website: "https://robertjohnson.com",
    rating: 4.6,
  },
  {
    id: 13,
    name: "Olivia King",
    graduationYear: 2017,
    industry: "Fintech",
    story:
      "Olivia has led the development of cutting-edge payment solutions at MNO Payments.",
    image: "/assets/person/img15.jpg",
    linkedin: "https://linkedin.com/in/oliviaking",
    website: "https://oliviaking.com",
    rating: 4.7,
  },
  {
    id: 14,
    name: "Ethan Harris",
    graduationYear: 2019,
    industry: "Blockchain Technology",
    story:
      "Ethan is a blockchain expert, creating decentralized applications at PQR Blockchain.",
    image: "/assets/person/img14.jpg",
    linkedin: "https://linkedin.com/in/ethanharris",
    website: "https://ethanharris.com",
    rating: 4.8,
  },
  {
    id: 15,
    name: "Lily Martinez",
    graduationYear: 2020,
    industry: "AI Ethics",
    story:
      "Lily advocates for ethical AI practices and has spoken at major tech conferences worldwide.",
    image: "/assets/person/img19.jpg",
    linkedin: "https://linkedin.com/in/lilymartinez",
    website: "https://lilymartinez.com",
    rating: 4.9,
  },
  {
    id: 16,
    name: "Daniel Wilson",
    graduationYear: 2015,
    industry: "Internet of Things",
    story:
      "Daniel has developed IoT solutions that optimize smart cities across the globe.",
    image: "/assets/person/img14.jpg",
    linkedin: "https://linkedin.com/in/danielwilson",
    website: "https://danielwilson.com",
    rating: 4.7,
  },
  {
    id: 17,
    name: "Charlotte Davis",
    graduationYear: 2021,
    industry: "Quantum Computing",
    story:
      "Charlotte is conducting cutting-edge research on quantum algorithms at STU Labs.",
    image: "/assets/person/img13.jpg",
    linkedin: "https://linkedin.com/in/charlottedavis",
    website: "https://charlottedavis.com",
    rating: 4.9,
  },
  {
    id: 18,
    name: "Henry Scott",
    graduationYear: 2014,
    industry: "Renewable Energy",
    story:
      "Henry is leading renewable energy projects that focus on sustainability and efficiency.",
    image: "/assets/person/img14.jpg",
    linkedin: "https://linkedin.com/in/henryscott",
    website: "https://henryscott.com",
    rating: 4.8,
  },
  {
    id: 19,
    name: "Isabella Clark",
    graduationYear: 2013,
    industry: "3D Printing",
    story:
      "Isabella revolutionized the 3D printing industry by developing faster, cost-efficient printers.",
    image: "/assets/person/img15.jpg",
    linkedin: "https://linkedin.com/in/isabellaclark",
    website: "https://isabellaclark.com",
    rating: 4.6,
  },
  {
    id: 20,
    name: "Jack Martinez",
    graduationYear: 2016,
    industry: "Game Development",
    story:
      "Jack founded a successful indie game studio that has won multiple gaming awards.",
    image: "/assets/person/img11.jpg",
    linkedin: "https://linkedin.com/in/jackmartinez",
    website: "https://jackmartinez.com",
    rating: 4.9,
  },
];
  


const SuccessStories = () => {
  const [stories, setStories] = useState(dummyStories);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [showDetailedView, setShowDetailedView] = useState(false);
  const storiesPerPage = 3; // Adjusted for testing, set to 20 later

  const filteredStories = stories
    .filter((story) =>
      story.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((story) =>
      filterIndustry ? story.industry === filterIndustry : true
    )
    .sort((a, b) => {
      if (sortOption === "latest") {
        return b.graduationYear - a.graduationYear;
      }
      if (sortOption === "oldest") {
        return a.graduationYear - b.graduationYear;
      }
      if (sortOption === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

  const totalPages = Math.ceil(filteredStories.length / storiesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const toggleView = () => setShowDetailedView(!showDetailedView);

  // Determine the range of pages to display (e.g., 1 to 6)
  const visiblePages = 6; // Show 6 pages at a time
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-gradient-to-b from-red-50 via-sky-200 to-purple-100 ">
        <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        </div> 
    <div className="  mt-16 py-10 px-5 mt-16">
      <h2 className="text-5xl font-bold text-center text-slate-600 mb-12">
        Alumni Success Stories
      </h2>

      <div className="flex justify-between items-center mb-8">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search alumni..."
            className="w-full p-4 rounded-lg shadow-lg border border-gray-400 focus:outline-none focus:border-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-4 top-4 text-gray-500" />
        </div>

        <div className="flex space-x-4">
          <select
            className="p-3 rounded-lg shadow-md border border-gray-400 focus:outline-none focus:border-indigo-600"
            value={filterIndustry}
            onChange={(e) => setFilterIndustry(e.target.value)}
          >
            <option value="">All Industries</option>
            <option value="Software Development">Software Development</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Data Science">Data Science</option>
          </select>

          <select
            className="p-3 rounded-lg shadow-md border border-gray-400 focus:outline-none focus:border-indigo-600"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="latest">Sort by Latest</option>
            <option value="oldest">Sort by Oldest</option>
            <option value="rating">Sort by Rating</option>
          </select>

          <button
            className="p-3 rounded-lg bg-indigo-600 text-white shadow-md hover:bg-indigo-800 focus:outline-none"
            onClick={toggleView}
          >
            {showDetailedView ? "Compact View" : "Detailed View"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentStories.map((story) => (
          <div
            key={story.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={story.image}
              alt={`${story.name}'s Success Story`}
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-center mb-2 text-indigo-700">
              {story.name}
            </h3>
            <p className="text-gray-500 text-center mb-4 flex justify-center items-center">
              <FaGraduationCap className="mr-2" /> Batch {story.graduationYear}
            </p>
            <p className="text-gray-500 text-center mb-4 flex justify-center items-center">
              <FaIndustry className="mr-2" /> {story.industry}
            </p>

            {showDetailedView && (
              <>
                <p className="text-gray-700 text-center mb-4">{story.story}</p>
                <div className="flex justify-center space-x-4">
                  {story.linkedin && (
                    <a
                      href={story.linkedin}
                      className="text-indigo-600 hover:text-indigo-800"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {story.website && (
                    <a
                      href={story.website}
                      className="text-indigo-600 hover:text-indigo-800"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGlobe size={24} />
                    </a>
                  )}
                </div>
              </>
            )}
            <div className="mt-4 flex justify-center items-center text-yellow-400">
              <FaStar className="mr-1" /> {story.rating}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => paginate(num)}
            className={`${
              currentPage === num
                ? "bg-indigo-600 text-white"
                : "bg-gray-300 text-indigo-700"
            } px-4 py-2 mx-2 rounded-full focus:outline-none hover:bg-indigo-700 hover:text-white transition duration-300`}
          >
            {num}
          </button>
        ))}
        {/* Add ellipsis if there are more pages */}
        {totalPages > endPage && (
          <span className="text-indigo-700 px-2">...</span>
        )}
      </div>
      
    </div>
  
    </div>
    
  );
};




export default SuccessStories;
