import 'remixicon/fonts/remixicon.css'


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import Networks from "./components/Networks/Network";
import Friend from "./components/message/Friend";
import Mentorship from "./components/Mentorship/Mentorship";

import SuccessStories from "./components/SuccessStories/SuccessStory"
import EventPage from "./components/EventPage/EventPage"
import Homepage from "./components/Authentication/Homepage";
import AdminHomepage from "./components/Authentication/AdminHomepage";
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider only for specific use


import './App.css';



function App() {
  return (
    <Router>
      <Routes>

        {/* Wrap ChakraProvider only for the signup route */}
        <Route
          path="/"
          element={
            <ChakraProvider>
              <Homepage />
            </ChakraProvider>
          }
        />
        <Route
          path="/adminlogin"
          element={
            <ChakraProvider>
              <AdminHomepage />
            </ChakraProvider>
          }
        />

        {/* Other routes without ChakraProvider */}



        <Route path="/home" element={<Home />} />
        <Route path="/network" element={<Networks />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/job-portal" element={<Jobs />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/mentorship-program" element={<Mentorship />} />


      </Routes>
    </Router>
  );
}

export default App;

