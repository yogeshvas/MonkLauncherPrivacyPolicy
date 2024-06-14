import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Description from "../components/Description";
import play from "../assets/images/play.png";
import NavBar from "../components/NavBar";

const Home = () => {
  const appsCards = [
    { id: 1, title: "Monk Launcher", category: "Productivity", to: "/monk" },
    { id: 2, title: "TaskMaster", category: "Productivity", to: "/task" },
    { id: 3, title: "NoteTaker", category: "Productivity", to: "/note" },
    { id: 4, title: "FocusTimer", category: "Productivity", to: "/focus" },
    { id: 5, title: "MindMap", category: "Productivity", to: "/mindmap" },
    { id: 6, title: "MonkLauncher", category: "Productivity", to: "/monk" },
  ];

  return (
    <>
      <NavBar />
      <Flex
        direction={{ base: "column", md: "row" }}
        backgroundColor={"#222831"}
        height={"100vh"}
      >
        {/* about me */}
        <Box
          width={{ base: "100vw", md: "50vw" }}
          // height={{ base: "50vh", md: "100vh" }}
          marginX={{ base: "0", md: "28" }}
          padding={{ base: "10", md: "0" }}
          // display={{ base: "none", sm: "block" }}
        >
          <Description />
        </Box>

        <Box
          width={{ base: "100vw", md: "50vw" }}
          // height={{ base: "50vh", md: "100vh" }}
          display="flex"
          justifyContent="center"
          // alignItems="center"
        >
          {/* my apps */}
          <Box
            height="70%"
            width="100%"
            overflowY="auto"
            paddingTop={10}
            paddingBottom={10}
            paddingX={4}
          >
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap={4}
            >
              {appsCards.map((item) => (
                <Box
                  key={item.id}
                  backgroundColor={"#00ADB5"}
                  width={{ base: "80vw", md: "30vw" }}
                  padding={8}
                  color={"white"}
                  borderRadius={20}
                  boxShadow=" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
                >
                  <Box>
                    <Text color={"gray"}>{item.category}</Text>
                  </Box>
                  <Box mt={2}>
                    <Text>{item.title}</Text>
                  </Box>

                  <Flex mt={2} alignItems={"center"} gap={2}>
                    <Text>Available On : </Text>
                    <Image width={5} src={play} />
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
