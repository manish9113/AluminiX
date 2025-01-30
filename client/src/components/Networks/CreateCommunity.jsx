import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const CommunityForm = () => {
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [tags, setTags] = useState("");
  const [communityLogo, setCommunityLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null); // for showing preview of the logo image

  // Handle the logo upload
  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCommunityLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result); // Set preview image
      };
      reader.readAsDataURL(file); // Read file as Data URL
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!communityName || !communityDescription || !tags || !communityLogo) {
      alert("Please fill in all fields and upload a logo.");
      return;
    }

    // Do something with the form data, e.g., send it to the backend
    console.log({
      communityName,
      communityDescription,
      tags,
      communityLogo,
    });

    // Reset form
    setCommunityName("");
    setCommunityDescription("");
    setTags("");
    setCommunityLogo(null);
    setLogoPreview(null);
  };

  return (
    <Box
      sx={{
        maxWidth: "90vwpx",
        height: "85vh",
        margin: "auto",
        padding: "2rem",
        background: "linear-gradient(to right, #64b3f4, #c3e0e5)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
        Create Community
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Community Name Input */}
        <TextField
          label="Community Name"
          fullWidth
          value={communityName}
          onChange={(e) => setCommunityName(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        {/* Community Description Input */}
        <TextField
          label="Community Description"
          fullWidth
          multiline
          rows={4}
          value={communityDescription}
          onChange={(e) => setCommunityDescription(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        {/* Tags Input */}
        <TextField
          label="Tags (comma separated)"
          fullWidth
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        {/* Community Logo Upload */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Upload Community Logo
          </Typography>
          <label htmlFor="upload-logo">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-logo"
              type="file"
              onChange={handleLogoUpload}
            />
            <IconButton
              color="primary"
              aria-label="upload logo"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>

          {/* Logo Preview */}
          {logoPreview && (
            <Box sx={{ mt: 2 }}>
              <Avatar
                src={logoPreview}
                alt="Community Logo"
                sx={{ width: 80, height: 80, margin: "auto" }}
              />
            </Box>
          )}
        </Box>

        {/* Submit Button */}
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" type="submit">
            Create Community
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CommunityForm;
