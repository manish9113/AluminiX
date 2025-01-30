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

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState(""); // Added state for Admin ID
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const Studentlogin = () => {
    navigate("/");
  };

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {
    navigate('/home');
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

      <FormControl id="admin-id" isRequired>
        <FormLabel>Admin ID</FormLabel>
        <Input
          placeholder="Enter your Admin ID "
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          maxLength={12} // Restricts the input to 12 characters
          minLength={10}
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
        onClick={Studentlogin}
      >
        Student Login
      </Button>
    </VStack>
  );
}

export default AdminLogin;
