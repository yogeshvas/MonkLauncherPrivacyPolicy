import { Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import play from "../src/assets/images/play.png";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes> */}
      <Box>
        <NavBar />
      </Box>

      <Box>
        <Flex
          backgroundColor={"#172029"}
          flexDirection={{ base: "column", sm: "row" }}
          alignItems={"center"}
        >
          <Box
            color={"white"}
            width={{ base: "100vw", sm: "70vw" }}
            height={"90vh"}
            overflow={"scroll"}
            padding={{ base: "10", sm: 20 }}
          >
            <Text>
              <Text fontWeight={700} fontSize={30} mb={10}>
                👋🏻 Welcome to Yogesh Dev Apps
              </Text>{" "}
              <Text
                fontWeight={500}
                fontSize={20}
                mb={5}
                display={"flex"}
                alignItems={"center"}
              >
                Pricay Policy <span style={{ fontSize: 30 }}> 👇🏻 </span>
              </Text>
              This document explains how we collect, use, disclose, and
              safeguard your information when you use our mobile applications
              and services. Please read this policy carefully to understand our
              practices regarding your personal data and how we will treat it.
              Information We Collect Personal Information: We may collect
              certain personal information (such as name, email address, or
              phone number) when you voluntarily provide it to us, such as when
              you register an account or contact us for support. Non-Personal
              Information: We may collect non-personal information such as
              device information, usage statistics, and technical data (e.g.,
              device model, operating system version) to improve our services
              and understand usage patterns.
              <Box height={10}></Box>
              How We Use Your Information To Provide and Maintain Our Services:
              We use your information to deliver and enhance our apps,
              personalize your experience, and respond to your inquiries. To
              Improve Our Services: We analyze usage data and feedback to
              improve our apps’ functionality, content, and user interface. To
              Communicate with You: We may send you service-related
              communications, updates, and promotional messages with your
              consent. Sharing of Your Information Third-Party Service
              Providers:
              <Box height={10}></Box>
              We may share your information with third-party service providers
              who help us operate and improve our services (e.g., hosting
              providers, analytics services). Legal Compliance: We may disclose
              your information if required to do so by law or in response to
              valid legal requests. Security of Your Information We implement
              reasonable security measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
              Your Choices and Rights Opt-Out: You can opt-out of receiving
              promotional communications by following the instructions in the
              messages we send. Access and Correction:
              <Box height={10}></Box>
              You may access and update your personal information by contacting
              us directly. Data Retention: We retain your information only for
              as long as necessary to fulfill the purposes outlined in this
              policy or as required by law. Children’s Privacy Our apps are not
              intended for children under the age of 13. We do not knowingly
              collect personal information from children under 13 without
              parental consent. Changes to This Privacy Policy We may update
              this Privacy Policy periodically to reflect changes in our
              practices or legal requirements. We will notify you of any
              material changes by posting the updated policy on our website or
              through other communication methods.
              <Box height={10}></Box>
              Contact Us If you have any questions about this Privacy Policy or
              our privacy practices, please contact us at{" "}
              <span style={{ fontWeight: 900 }}>writetokhair@gamil.com</span>.
            </Text>
          </Box>
          <Box color={"white"} width={{ base: "100vw", sm: "30vw" }}>
            <Box
              backgroundColor={"#242B32"}
              paddingX={{ base: 5, sm: 10 }}
              paddingY={5}
              margin={{ base: 10, sm: 10 }}
              borderRadius={10}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
              <Text fontWeight={600} color={"gray"} fontSize={12}>
                Productivity
              </Text>
              <Text mt={2}>Monk Launcher.</Text>
              <Flex alignItems={"center"} mt={5}>
                <Text>Available on : </Text>
                <Image ml={10} width={7} src={play} />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
