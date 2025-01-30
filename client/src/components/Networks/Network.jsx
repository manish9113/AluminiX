import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import LeftPaper from "./LeftPaper";
import RightPaper from "./RightPaper";

function Networks() {
  
  const [activePage, setActivePage] = useState("Connections");


  return (
    <div>
      
      <Box sx={{ position: "fixed", width: "100%", zIndex: 100 }}>
        <Navbar />
      </Box>

      
      <Box
        sx={{
          pt: 8,
          p: 3,
          height: "100vh",
          overflow: "hidden",
          background: "linear-gradient(to right,  #c4e0e5,#e9eaec)",
        }}
      >
        <Grid container spacing={0} sx={{ height: "100%" }}>
          <Grid item xs={3} sx={{ height: "100%", overflowY: "auto" }}>
            <LeftPaper setActivePage={setActivePage} />
          </Grid>

          <Grid item xs={9} sx={{ height: "80%", overflowY: "none" }}>
            <div style={{ marginTop: "58px" }}>
              <RightPaper activePage={activePage} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Networks;
