import * as React from "react";
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
import FbIcon from "../icons/NavList/FbIcon";
import InstraIcon from "../icons/NavList/InstraIcon";
import WhatsappIcon from "../icons/NavList/WhatsappIcon";
import Logo from "../icons/NavList/Logo";
import LogoName from "../icons/NavList/LogoName";
import CrossIcon from "../icons/NavList/CrossIcon";
import MobileLogo from "../icons/NavList/MobileLogo";
import { styled } from "@mui/material/styles";

const navItems = ["Home", "Quem Somos", "Serviços", "Galeria", "Testemunhos"];

const StyledListItemText = styled(ListItemText)({
  "& .MuiListItemText-primary": {
    textTransform: "capitalize",
    fontFamily: "mulish",
    fontSize: "16px",
    fontWeight: 300,
    display: "flex",
  },
});

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [appBarColor, setAppBarColor] = React.useState("transparent");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset; // Access window globally
    if (scrollTop > 990) {
      setAppBarColor("#a4775e");
    } else {
      setAppBarColor("transparent");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box>
      <Divider />
      <Box
        sx={{ padding: 2, display: "flex", justifyContent: "space-between" }}
      >
        <MobileLogo sx={{ width: "100px" }} />
        <CrossIcon onClick={handleDrawerToggle} />
      </Box>
      <List sx={{ paddingTop: { xs: "55px", sm: "55px", md: "44px" } }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <StyledListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box>
        <Typography
          sx={{
            fontFamily: "mulish",
            paddingLeft: "16px",
            paddingBottom: "24px",
            paddingTop: "100px",
          }}
        >
          Horário
        </Typography>
        <Box sx={{ paddingLeft: "16px" }}>
          <Typography sx={{ paddingBottom: "16px" }}>
            Mon - Sat: 10:00 — 19:30
          </Typography>
          <Typography>Sun: CLOSED</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            paddingLeft: "16px",
            paddingTop: "48px",
          }}
        >
          <FbIcon />
          <InstraIcon />
          <WhatsappIcon />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: appBarColor,
          transition: "background-color 0.3s ease",
          boxShadow: "none",
          paddingX: { lg: "150px", xl: "250px" },
          paddingTop: { lg: "18px", xl: "55px" },
        }}
      >
        <Toolbar sx={{ paddingX: { lg: "0px" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "block", md: "block", lg: "none" },
              order: { xs: 2 },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "flex",
                columnGap: 2,
              },
              flexDirection: "row",
              alignItems: { sm: "center" },
              columnGap: { sm: "14px" },
              order: { xs: 1 },
            }}
          >
            <Logo
              sx={{
                width: "100%",
                maxWidth: { xs: "40px",sm:"85px", md: "107px", lg: "135px" },
                height: "auto",
              }}
            />
            <LogoName
              sx={{
                width: "100%",
                maxWidth: { xs: "140px",sm:"150px", md: "189px", lg: "378px" },
                height: "atuo",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              order: { lg: 2 },
              alignItems: "center",
              gap: "48px",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  fontFamily: "mulish",
                  fontWeight: 300,
                  textTransform: "capitalize",
                  padding: 0,
                  minWidth: "auto",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "80%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
