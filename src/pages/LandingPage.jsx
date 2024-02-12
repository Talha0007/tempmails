import React from "react";

import Background from "../assets/Tools.jpg";

// import mui
import { Box, Container, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useSpring, animated } from "react-spring";

import Appbar from "../components/AppBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const tools = [
  { id: 1, tool: "Email Generator", link: "/emailgen" },
  { id: 2, tool: "Username Generator", link: "/usernamegen" },
  { id: 3, tool: "Name Generator", link: "/namegen" },
];

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Random Email Generator",
        1000,
        "Random Username Generator",
        1000,
        "Random Name Generator",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

const LandingPage = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });
  return (
    <Box>
      <Appbar />
      <Container
        maxWidth="lg"
        sx={{
          boxShadow:
            "5px 0px 10px -5px rgba(0, 0, 0, 0.5), -5px 0px 10px -5px rgba(0, 0, 0, 0.5)",
          paddingBottom: "1rem",
        }}
      >
        <Box
          sx={{
            marginTop: "4rem",
            paddingTop: "2rem",
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: { md: "center", sm: "start" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              height: "12rem",
              fontWeight: "bold",
              fontSize: "4rem",
            }}
          >
            <ExampleComponent />
          </Typography>
        </Box>
        <Typography
          variant="h6"
          textAlign={"center"}
          marginTop={4}
          marginBottom={4}
          sx={{ padding: { xs: "0 2rem", md: "0 4rem" } }}
        >
          Introducing our innovative ReactJS tool that empowers users to
          effortlessly generate random emails, usernames, and names with ease.
          Seamlessly tailor your user experience by crafting custom usernames,
          offering unparalleled flexibility. Elevate your productivity and
          streamline your workflow with our user-friendly interface. Join us
          today and unlock endless possibilities for personalization and
          efficiency!
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "300px",

            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            zIndex: 1,
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
              zIndex: -1,
            },

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <animated.div style={styles}>
            <Typography
              sx={{
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Our Tools
            </Typography>
          </animated.div>
          <Box
            sx={{
              marginTop: "2rem",
              width: "80%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {tools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                  borderBottom: "2px solid lightgray",
                  fontSize: "20px",
                }}
              >
                {tool.tool}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default LandingPage;
