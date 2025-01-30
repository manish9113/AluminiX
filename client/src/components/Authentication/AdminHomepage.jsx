import React from "react";
import { Container, Box, Text, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AdminLogin from "./AdminLogin";

import { keyframes } from "@emotion/react";

// Keyframes for typing word by word (with space between words)
const typing = keyframes`
  0% { width: 0 }
  25% { width: 25% }
  50% { width: 50% }
  75% { width: 75% }
  100% { width: 100% }
`;

// Keyframes for erasing the text
const erasing = keyframes`
  0% { width: 100% }
  50% { width: 50% }
  100% { width: 0 }
`;

const AdminHomepage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/person/back2.jpeg")`,
        backgroundSize: "cover", // Ensures the image covers the entire background
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full viewport height
      }}
    >
      <Container maxW="7xl" centerContent>
        {" "}
        {/* Increase container width */}
        <Flex
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          bg={"white"}
          p={0}
          alignItems="stretch"
          justifyContent="flex-start"
          direction="row"
        >
          {/* Left Side with Gradient and Typewriter Effect */}
          <Box
            w="45%"
            bgGradient="linear(to-r, teal.500, blue.500)"
            p={4}
            color="white"
            position="relative"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            {/* Typewriter effect container */}
            <Text
              fontSize="70px" // Larger font size for 'AluminiX'
              fontFamily="'Poppins', sans-serif"
              fontWeight="bold"
              display="inline"
              whiteSpace="nowrap"
              overflow="hidden"
              width="100%"
              animation={`${typing} 4s steps(4, end), ${erasing} 4s steps(4, end) 6s infinite`}
            >
              AluminiX
            </Text>

            <Text
              fontSize="20px" // Smaller font size for the rest of the first sentence
              fontFamily="'Poppins', sans-serif"
              whiteSpace="nowrap"
              overflow="hidden"
              animation={`${typing} 4s steps(4, end) 4s, ${erasing} 4s steps(4, end) 10s infinite`}
              animationDelay="4s" // Delay so that 'AluminiX' appears first
            >
              Personalized College Events.
            </Text>

            <Text
              fontSize="20px" // Smaller font size for the second sentence
              fontFamily="'Poppins', sans-serif"
              whiteSpace="nowrap"
              overflow="hidden"
              mt={2} // Margin to create space between sentences
              animation={`${typing} 4s steps(4, end) 8s, ${erasing} 4s steps(4, end) 14s infinite`}
              animationDelay="8s" // Delay to display after the first sentence
            >
              Personalized Success Stories Posting.
            </Text>
          </Box>

          {/* Divider: Vertical Line */}
          <Box
            h="100%"
            w="2px"
            bg="gray.300"
            mx={2} // Add margin between boxes
          />

          {/* Right Side with Tabs */}
          <Box w="55%" mt="8px">
            <Tabs variant="soft-rounded" align="center">
              <TabList mb="1em">
                <Tab width="100%">Login</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <AdminLogin />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default AdminHomepage;
