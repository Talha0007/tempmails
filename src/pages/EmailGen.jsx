import React, { useState } from "react";

import { Helmet } from "react-helmet";

// import mui
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import Appbar from "../components/AppBar";
import Footer from "../components/Footer";

const generateRandomEmail = (domain) => {
  const emailCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const emailSpecialCharacters = "._";
  const emailLength = 10;
  let randomEmail = "";

  // Add characters to the email
  for (let i = 0; i < emailLength - 2; i++) {
    const randomIndex = Math.floor(Math.random() * emailCharacters.length);
    randomEmail += emailCharacters[randomIndex];
  }

  // Add either one underscore or dot in the middle
  const specialCharIndex = Math.floor(
    Math.random() * emailSpecialCharacters.length
  );
  randomEmail += emailSpecialCharacters[specialCharIndex];

  // Add the last character
  const lastIndex = Math.floor(Math.random() * emailCharacters.length);
  randomEmail += emailCharacters[lastIndex];

  return randomEmail + domain;
};

const EmailGen = () => {
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleGmail = () => {
    const gmail = generateRandomEmail("@gmail.com");
    setGeneratedEmail(gmail);
  };

  const handleYahoo = () => {
    const yahoo = generateRandomEmail("@yahoo.com");
    setGeneratedEmail(yahoo);
  };

  const handleHotmail = () => {
    const hotmail = generateRandomEmail("@hotmail.com");
    setGeneratedEmail(hotmail);
  };

  const handleOutlook = () => {
    const outlook = generateRandomEmail("@outlook.com");
    setGeneratedEmail(outlook);
  };

  const handleCopyMail = () => {
    navigator.clipboard.writeText(generatedEmail);
  };

  return (
    <>
      <Helmet>
        <title>Email Generator</title>
      </Helmet>
      <Box>
        <Appbar />
        <Container
          maxWidth="md"
          sx={{
            height: { md: "150vh", sm: "full" },
            boxShadow:
              "5px 0px 10px -5px rgba(0, 0, 0, 0.5), -5px 0px 10px -5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box sx={{ paddingTop: { xs: "5rem", md: "8rem" } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Generate Random Email
            </Typography>
            <Grid
              container
              variant="contained"
              sx={{
                margin: "1rem 0",
                padding: 2,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "70%",
                },
              }}
            >
              <Grid item xs={6} sm={6} md={3} sx={{ margin: ".4rem 0" }}>
                <Button variant="contained" onClick={handleGmail}>
                  Gmail
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={3} sx={{ margin: ".4rem 0" }}>
                <Button variant="contained" onClick={handleYahoo}>
                  Yahoo
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={3} sx={{ margin: ".4rem 0" }}>
                <Button variant="contained" onClick={handleHotmail}>
                  Hotmail
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={3} sx={{ margin: ".4rem 0" }}>
                <Button variant="contained" onClick={handleOutlook}>
                  Outlook
                </Button>
              </Grid>
            </Grid>

            <Box
              sx={{
                margin: "1rem 0",
                padding: 2,
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                type="text"
                value={generatedEmail}
                sx={{ width: "100%" }}
              />
              <Button
                variant="outlined"
                size="large"
                onClick={handleCopyMail}
                sx={{ width: "60%", marginTop: 1 }}
              >
                Copy Email
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ margin: 1 }}>
              The Random Gmail Generator is a user-friendly web tool designed
              for the creation of random Gmail addresses. It offers a convenient
              solution for generating unique and random email addresses suitable
              for various purposes, such as signing up for online services,
              registering on websites, or safeguarding privacy during online
              activities.
            </Typography>
            <Typography variant="h6" sx={{ margin: 1 }}>
              Upon clicking the "Generate Email" button, the tool produces a
              random Gmail address adhering to the standard Gmail format. The
              resulting email address is a combination of lowercase letters and
              numbers, with the initial character always being a letter. The
              length of the email address varies randomly between 6 and 20
              characters, presenting a diverse array of possibilities.
            </Typography>
            <Typography variant="h6" sx={{ margin: 1 }}>
              This tool streamlines the process of acquiring a random Gmail
              address without the need to devise a unique username manually.
              Users can easily copy the generated email from the text input
              field with a single click, facilitating its use in various
              registration or sign-up processes.
            </Typography>
            <Typography variant="h6" sx={{ margin: 1 }}>
              Particularly advantageous for Pinterest sign-ups, the tool ensures
              a reliable way to generate random Gmail addresses essential for
              creating an account on the platform. Users can effortlessly
              generate an email address using the tool, copy it, and paste it
              into the email field during the Pinterest sign-up process.
            </Typography>
            <Typography variant="h6" sx={{ margin: 1 }}>
              It's crucial to note that the generated email addresses are
              randomly created and hold no connection to actual Gmail accounts.
              They are intended for temporary or one-time use, providing no
              access to an existing mailbox.
            </Typography>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default EmailGen;
