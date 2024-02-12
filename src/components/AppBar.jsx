import * as React from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link, useNavigate } from "react-router-dom";

// imports logo
import Logo from "../assets/tempmails.png";
import LogoDrawer from "../assets/LogoDrawer.png";

import Dropdown from "./custom/Dropdown";

const drawerWidth = 240;
const navItems = [
  { id: 1, page: "About", link: "/aboutus" },
  { id: 2, page: "Contact", link: "/contactus" },
];
const tools = [
  { id: 1, tool: "Email Generator", link: "/emailgen" },
  { id: 2, tool: "Username Generator", link: "/usernamegen" },
  { id: 3, tool: "Random Name Generator", link: "/namegen" },
];

const navTools = [
  { id: 1, tool: "Email Generator", link: "/emailgen" },
  { id: 2, tool: "Name Generator", link: "/namegen" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <span onClick={() => navigate("/")}>
            <img src={LogoDrawer} style={{ width: "200px" }} />
          </span>
        </Typography>

        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton sx={{ textAlign: "center", display: "block" }}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={item.link}
                >
                  <ListItemText primary={item.page} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography
          sx={{
            color: "#000",
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: 2,
          }}
        >
          Our Tools
        </Typography>
        <List>
          {tools.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  display: "block",
                }}
              >
                <Link
                  to={item.link}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <ListItemText primary={item.tool} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img src={Logo} style={{ width: "150px" }} />
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flexGrow: 4,
            }}
          >
            {navTools.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginRight: "50px",
                }}
              >
                {item.tool}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Dropdown />
            {navItems.map((item) => (
              <Button key={item.id}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={item.link}
                >
                  {item.page}
                </Link>
              </Button>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
