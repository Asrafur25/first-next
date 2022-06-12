import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /*   const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; */

  return (
    <AppBar sx={{ position: { xs: "static", md: "fixed" } }} className="Header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              color: "black",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link href={"/Components/home"}>
                <Typography textAlign="center"><a>Home</a></Typography>
              </Link>

              <Link href={"/Components/about"}>
                <Typography textAlign="center"><a>About</a></Typography>
              </Link>

              <Link href={"/users"}>
                <Typography textAlign="center"><a>User</a></Typography>
              </Link>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "right",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link href={"/Components/home"}><a>Home</a></Link>
            <Link href={"/Components/about"}><a>About</a></Link>
            <Link href={"/users"}><a>User</a></Link>

                      </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
