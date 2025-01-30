import React, { useState } from "react";
import { Paper, TextField, Button, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

function SavePost() {
  const [postdata, setPostdata] = useState("");
  const [file, setFile] = useState("");

  const handleChange = (event) => {
    // Correctly retrieve the value from the TextField
    setPostdata(event.target.value);
    console.log("Post Data:", postdata);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log("Selected File:", event.target.files[0]);
    console.log(file);
  };

  const handleClick = async () => {
    if (!file || !postdata) return;
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("https://aluminix.onrender.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
       console.log("Uploaded Image URL:", res.data.url);
      const newPost = {
        postData: postdata,
        postProfileUrl:res.data.url,
      };
      const savedPost= await axios.post("https://aluminix.onrender.com/postAlumini",newPost);
      console.log("saved post",savedPost.data);
    } catch (error) {
      console.log("error while saving posts");
      console.error(error.message);
    }
    setFile('');
     setPostdata('');
  };

  return (
    <Paper
      className="post"
      style={{
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField
        fullWidth
        id="standard-basic"
        label="Share Your thoughts..."
        variant="standard"
        value={postdata}
        onChange={handleChange}
        style={{ marginRight: 20 }}
      />
      <div style={{ display: "flex" }}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={{
            marginRight: 10,
            height: 45,
            width: 168,
          }}
        >
          Upload media
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>
        <Button
          variant="contained"
          onClick={handleClick}
          endIcon={<SendIcon />}
        >
          Post
        </Button>
      </div>
    </Paper>
  );
}

export default SavePost;
