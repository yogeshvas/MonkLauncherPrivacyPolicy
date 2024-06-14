import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <Flex
        paddingX={{ base: "5", sm: "20" }}
        paddingY={5}
        backgroundColor={"#222831"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text color={"white"} fontSize={30}>
            {" "}
            Khair {`:)`}
          </Text>
        </Box>
        <Box>
          <a href="https://www.linkedin.com/in/yogeshvashisth/">
            <FaLinkedinIn color="white" size={30} />
          </a>
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
