import React from "react";

import { Container, Box, Typography } from "@mui/material";

import Appbar from "../components/AppBar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <Box>
      <Appbar />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          boxShadow:
            "5px 0px 10px -5px rgba(0, 0, 0, 0.5), -5px 0px 10px -5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "80%",
            height: "20rem",
          }}
        ></Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textAlign={"center"}
            marginTop={2}
            marginBottom={2}
          >
            About Us
          </Typography>
          <Typography variant="p">
            For more information, or to work with us, get in touch! We’d love to
            hear from you.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;
