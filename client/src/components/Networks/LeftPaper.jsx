import React, { useState ,useEffect} from "react";
import { Box, Paper, Typography } from "@mui/material";

function LeftPaper({ setActivePage }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0); 
  const items = [
    "Connections",
    "Communities",
    "Suggestions",
    "Connection Requests",
    "Create Community",
  ];

  
  useEffect(() => {
    setActivePage(items[0]);
  }, [setActivePage]);

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        top: "80px",
        left: "20px",
        width: "20%",
        height: "50vh",
        p: 2,
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => {
            setSelectedIndex(index); 
            setActivePage(item); 
          }}
          sx={{
            p: 1,
            pl: 2,
            textAlign: "left",
            position: "relative",
            backgroundColor:
              selectedIndex === index || hoveredIndex === index
                ? "#64b3f4" 
                : "#fff",
            transition: "all 0.3s ease",
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            cursor: "pointer",
            "&:after": {
              content: '""',
              position: "absolute",
              right: "-10px",
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft:
                hoveredIndex === index || selectedIndex === index
                  ? "10px solid #64b3f4" 
                  : "none",
              transition: "all 0.3s ease",
            },
          }}
        >
          <Typography
            sx={{
              fontSize:
                hoveredIndex === index || selectedIndex === index
                  ? "1.1rem"
                  : "1rem",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

export default LeftPaper;
