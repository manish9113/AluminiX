import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const people = [
  {
    name: "Suhana Sharma",
    company: "TechCorp",
    address: "New York",
    mutualConnections: 5,
    rating: 4.5,
    imageUrl: "/assets/person/1.jpeg",
  },
  {
    name: "Dev kumar",
    company: "FinTech",
    address: "San Francisco",
    mutualConnections: 2,
    rating: 3.8,
    imageUrl: "/assets/person/img11.jpg",
  },
  {
    name: "Charlie",
    company: "HealthTech",
    address: "Chicago",
    mutualConnections: 0,
    rating: 4.2,
    imageUrl: "/assets/person/img13.jpg",
  },
  {
    name: "David",
    company: "EduTech",
    address: "Los Angeles",
    mutualConnections: 3,
    rating: 3.5,
    imageUrl: "/assets/person/img14.jpg",
  },
  {
    name: "Anup Samanta",
    company: "HealthTech",
    address: "Chicago",
    mutualConnections: 0,
    rating: 4.2,
    imageUrl: "/assets/person/img17.jpg",
  },
  {
    name: "Siddhartha",
    company: "EduTech",
    address: "Los Angeles",
    mutualConnections: 3,
    rating: 3.5,
    imageUrl: "/assets/person/img18.jpg",
  },
  
  // Add more people as needed
];

// Sort people based on mutualConnections
const sortedPeople = [...people].sort(
  (a, b) => b.mutualConnections - a.mutualConnections
);

const ITEMS_PER_PAGE = 4;

function SuggestionPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  // Function to filter people based on search query
  const filteredPeople = sortedPeople.filter((person) =>
    `${person.name} ${person.company} ${person.address}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPeople.length / ITEMS_PER_PAGE);
  const currentItems = filteredPeople.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <Box
      sx={{
        p: 2,
        height: "80vh",
        overflowY: "none",
        background: "linear-gradient(to right, #64b3f4, #c3e0e5)",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        People You May Know
      </Typography>

      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search by name, company, or address"
        fullWidth
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* People Grid */}
      <Grid container spacing={2}>
        {currentItems.map((person, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3} // Adjusts to 3 items in a row for medium screens and above
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                borderRadius: 1,
                bgcolor: "#fff",
                boxShadow: 1,
                textAlign: "center",
                position: "relative",
              }}
            >
              <Avatar
                src={person.imageUrl}
                alt={person.name}
                sx={{ width: 70, height: 80, mb: 1 }}
              />
              <Typography variant="h6" sx={{ mb: 1 }}>
                {person.name}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {person.company}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {person.address}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {person.mutualConnections > 0
                  ? `${person.mutualConnections} mutual friends`
                  : "No mutual friends"}
              </Typography>

              {/* Rating */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography variant="body2" sx={{ mr: 1 }}>
                  Rating:
                </Typography>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: "#e0f7fa", // Light color
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: 1, // Optional: adds a slight shadow
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#00796b", fontWeight: "bold" }}
                  >
                    {person.rating}
                  </Typography>
                </Box>
              </Box>

              {/* Request Button */}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 1 }}
                onClick={() => alert(`Request sent to ${person.name}`)}
              >
                Send Request
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
          <ArrowBackIosIcon />
        </IconButton>

        {/* Dots indicating number of pages */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: index === currentPage ? "primary.main" : "grey.400",
              mx: 0.5,
            }}
          />
        ))}

        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SuggestionPage;
