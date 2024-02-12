import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2">
      {"Copyright © "}
      <Link color="inherit" href="https://tempmails.pk/">
        Temp Mails
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "10vh",
        }}
      >
        <CssBaseline />

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "light"
            //     ? theme.palette.grey[200]
            //     : theme.palette.grey[800],
            backgroundColor: "#42a5f5",
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h6" sx={{ color: "#fff" }}>
              Email and Username Generator
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
