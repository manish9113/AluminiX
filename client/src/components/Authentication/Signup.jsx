import {
  FormLabel,
  VStack,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Select,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [pic, setPic] = useState("");
  const [university, setUniversity] = useState("");
  const [college, setCollege] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [batchYear, setBatchYear] = useState("");

  const navigate=useNavigate();

  const universities = [
    "University A",
    "University B",
    "University C",
    "University D",
    "University E",
  ];
  const collegesByUniversity = {
    "University A": ["College A1", "College A2", "College A3"],
    "University B": ["College B1", "College B2", "College B3"],
    "University C": ["College C1", "College C2", "College C3"],
    "University D": ["College D1", "College D2", "College D3"],
    "University E": ["College E1", "College E2", "College E3"],
  };
  const batchYears = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];

  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = (pics) => {
    // Handle file upload logic here
  };

  const submitHandler = async() => {
    const signup_data = {
      name,
      email,
      password,
      confirmpassword,
      university,
      college,
      registrationNo,
      batchYear,
    };
   try{
      const response= await axios.post("https://aluminix.onrender.com/studentsignup", signup_data);
      if(response.status===201){
        setName("")
        setEmail("")
        setPassword("")
        setConfirmpassword("")
        setUniversity("")
        setCollege("")
        setRegistrationNo("")
        setBatchYear("")
        navigate('/home')
      }
   }
   catch(error){
     if(error.response.status===400){
      alert("email already exists")
     }
     else{
      console.log("error while signup user",error)
     }
    }
  };

  return (
    <Box
      maxH="75vh"
      overflowY="auto"
      sx={{
        /* Hide scrollbar for Chrome, Safari, and Opera */
        "::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for IE, Edge, and Firefox */
        "-ms-overflow-style": "none" /* IE and Edge */,
        "scrollbar-width": "none" /* Firefox */,
      }}
    >
      <VStack spacing="5px" color="black">
        <FormControl id="Name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="university" isRequired>
          <FormLabel>University</FormLabel>
          <Select
            placeholder="Select your University"
            onChange={(e) => {
              setUniversity(e.target.value);
              setCollege(""); // Clear selected college when university changes
            }}
          >
            {universities.map((univ, index) => (
              <option key={index} value={univ}>
                {univ}
              </option>
            ))}
          </Select>
        </FormControl>

        {university && (
          <FormControl id="college" isRequired>
            <FormLabel>College</FormLabel>
            <Select
              placeholder="Select your College"
              onChange={(e) => setCollege(e.target.value)}
            >
              {collegesByUniversity[university]?.map((col, index) => (
                <option key={index} value={col}>
                  {col}
                </option>
              ))}
            </Select>
          </FormControl>
        )}

        <FormControl id="registrationNo" isRequired>
          <FormLabel>University Registration Number</FormLabel>
          <Input
            placeholder="Enter your University Registration Number"
            onChange={(e) => setRegistrationNo(e.target.value)}
          />
        </FormControl>
        <FormControl id="batchYear" isRequired>
          <FormLabel>Passout Batch Year</FormLabel>
          <Select
            placeholder="Select your Batch Year"
            onChange={(e) => setBatchYear(e.target.value)}
          >
            {batchYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="pic">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm your Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Signup
        </Button>
      </VStack>
    </Box>
  );
}

export default Signup;
