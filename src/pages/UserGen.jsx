import React, { useState } from "react";

// import mui
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material";

import Appbar from "../components/AppBar";
import Footer from "../components/Footer";

const UserGen = () => {
  const [inputName, setInputName] = useState("");
  const [generatedUsername, setGeneratedUsername] = useState("");

  const generateUsername = () => {
    if (inputName.trim() !== "") {
      const randomDigit = () => Math.floor(Math.random() * 10);
      const randomSpecialCharacter = () => (Math.random() < 0.5 ? "." : "_");

      // Generate a random number of digits (1 to 4)
      const numberOfDigits = Math.floor(Math.random() * 4) + 1;

      // Generate random digits and concatenate them to the entered name
      let randomNumber = "";
      for (let i = 0; i < numberOfDigits; i++) {
        randomNumber += randomDigit();
      }

      // Occasionally include a dot or underscore
      const specialCharacterProbability = Math.random();
      const specialCharacter =
        specialCharacterProbability < 0.2 ? randomSpecialCharacter() : "";

      // Combine the entered name with the special character, username, and random digits
      const username = `${specialCharacter}${inputName}${specialCharacter}${randomNumber}`;

      setGeneratedUsername(username);
    }
  };

  const handleCopyUsername = () => {
    navigator.clipboard.writeText(generatedUsername);
  };
  return (
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
            Generate Random Username
          </Typography>
          <ButtonGroup
            variant="contained"
            sx={{
              margin: "1rem 0",
              padding: 2,
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
              },
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              placeholder="enter name here..."
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <Button onClick={generateUsername}>Generate</Button>
          </ButtonGroup>

          {generatedUsername && (
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
                value={generatedUsername}
                sx={{ width: "100%" }}
              />
              <Button
                variant="outlined"
                size="large"
                onClick={handleCopyUsername}
                sx={{ width: "60%", marginTop: 1 }}
              >
                Copy username
              </Button>
            </Box>
          )}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ margin: 1 }}>
            This tool creates random usernames commonly used, carefully chosen
            to mirror popular preferences among American parents. Whether you
            seek inspiration for Pinterest account names, character names for
            stories, or are simply intrigued by the array of names, this
            generator offers unique and appealing options.
          </Typography>
          <Typography variant="h6" sx={{ margin: 1 }}>
            Generating random usernames is a practical and creative endeavor,
            particularly useful in online spaces where unique identifiers are
            required. Whether you're signing up for a new social media account,
            creating an email address, or engaging in online gaming, a distinct
            username adds a personal touch to your online presence. The process
            involves combining various elements like letters, numbers, and
            symbols to craft a username that is both memorable and unique.
          </Typography>
          <Typography variant="h6" sx={{ margin: 1 }}>
            To utilize the generator, click the "Generate Userame" button,
            revealing a new random name with each click. If you find a name you
            fancy, use the "Copy" button to effortlessly copy it to your
            clipboard, facilitating the creation of Pinterest accounts or
            utilization in other contexts.
          </Typography>
          <Typography variant="h6" sx={{ margin: 1 }}>
            Particularly advantageous for Pinterest sign-ups, the tool ensures a
            reliable way to generate random Gmail addresses essential for
            creating an account on the platform. Users can effortlessly generate
            an email address using the tool, copy it, and paste it into the
            email field during the Pinterest sign-up process.
          </Typography>
          <Typography variant="h6" sx={{ margin: 1 }}>
            It's important to note that the generated names are randomly
            selected and do not correspond to real individuals. They are
            intended for creative purposes and should be used responsibly and
            respectfully.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default UserGen;
