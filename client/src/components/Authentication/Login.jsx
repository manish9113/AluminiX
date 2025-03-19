import React, { useState } from "react";
import {
  FormLabel,
  VStack,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("testmail@gmail.com");
  const [password, setPassword] = useState("123456");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const Adminlogin = () => {
    navigate("/adminlogin");
  };

  const handleClick = () => {
    setShow(!show);
  };
  const submitHandler = async () => {
    const login_data = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/studentlogin",
        login_data
      );
      if(response.status===200){
        setEmail("")
        setPassword("")
      }
      navigate("/home")

    } catch (error) {
      if(error.response.status===404){
        alert("user does not exists")
        setEmail("");
        setPassword("");
      }
      else if(error.response.status===401){
        alert("password doesnot match")
        setPassword("");
      }
      else{
        console.log("error while logging in user", error);
      }
      
    }
  };

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={Adminlogin}
      >
        Admin Login
      </Button>
    </VStack>
  );
}

export default Login;
