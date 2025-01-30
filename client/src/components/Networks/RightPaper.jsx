import React from "react";
import ConnectionsPage from "./Connections";
import CommunitiesPage from "./Communities";
import SuggestionsPage from "./Suggestions";
import ConnectionRequest from "./ConnectionRequest";
import CommunityCreationForm from "./CreateCommunity";

function RightPaper({ activePage }) {
  
  return (
    <>
      {activePage === "Connections" && <ConnectionsPage />}
      {activePage === "Communities" && <CommunitiesPage />}
      {activePage === "Suggestions" && <SuggestionsPage />}
      {activePage === "Connection Requests" && <ConnectionRequest />}
      {activePage === "Create Community" && <CommunityCreationForm />}
    </>
  );
}

export default RightPaper;
