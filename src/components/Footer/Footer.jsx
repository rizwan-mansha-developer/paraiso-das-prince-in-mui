import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Collapse,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/Footer/Logo.svg";
import TextLogo from "../../assets/Footer/TextLogo.svg";
import FbIcon from "../../assets/Footer/FbIcon.svg";
import InstraIcon from "../../assets/Footer/InstraIcon.svg";
import WhatsappIcon from "../../assets/Footer/WhatsappIcon.svg";

// Styled components
const StyledFooter = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  overflow: "hidden",
  backgroundColor: "#faf7f5",
  color: "#494040",
  fontSize: "14px",
  fontWeight: 300,
  fontFamily: "Mulish",
  letterSpacing: "normal",
  padding: "50px 0",
  position: "relative",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1920px",
  padding: "0 16px",
  [theme.breakpoints.up("md")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.up("lg")]: {
    // padding: "0 13%",
    marginLeft: "0px",
    marginRight: "0px",
  },
}));

const LogoContainer = styled(Box)({
  display: "flex",
  maxWidth: "100%",
  gap: "20px",
  "& img:first-of-type": {
    width: "35%",
    objectFit: "contain",
  },
  "& img:last-of-type": {
    width: "60%",
    objectFit: "contain",
  },
});

const SocialIcons = styled(Box)({
  display: "flex",
  gap: "16px",
  paddingTop: "16px",
  "& img": {
    width: "100%",
    objectFit: "contain",
  },
});

const MobileMenu = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#faf7f5",
  padding: "16px 24px",
  zIndex: 10,
  borderTop: "1px solid #494040",
  boxShadow: theme.shadows[3],
}));

const SectionTitle = styled(Typography)({
  width: "331px",
  color: "#494040",
  fontSize: "16px",
  fontWeight: 700,
  fontFamily: "Mulish",
  lineHeight: "normal",
  marginBottom: "8px",
});

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <StyledFooter
      sx={{ display: { lg: "flex" }, justifyContent: { lg: "center" } }}
    >
      <StyledContainer>
        <Grid container spacing={{ xs: 2.5, md: 5 }}>
          {/* Brand and Message */}
          <Grid item xs={12} sm={6} md={3}>
            <LogoContainer>
              <Box
                component="img"
                src={Logo}
                alt="Logo Icon"
                sx={{
                  width: { lg: "35%", xl: "50%" },
                  height: { xl: "16px" },
                }}
              />
              <Box component="img" src={TextLogo} alt="Text Logo" />
            </LogoContainer>
            <Typography
              sx={{
                pt: 7,
                pb: 3,
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "Mulish",
              }}
            >
              Caros visitantes!
            </Typography>
            <Typography>
              Entre no nosso salão e deixe-nos transformar os seus sonhos de
              beleza em realidade
            </Typography>
            <SocialIcons>
              {[
                { icon: FbIcon, label: "Facebook" },
                { icon: InstraIcon, label: "Instagram" },
                { icon: WhatsappIcon, label: "WhatsApp" },
              ].map((social) => (
                <Link key={social.label} href="#" aria-label={social.label}>
                  <Box component="img" src={social.icon} alt={social.label} />
                </Link>
              ))}
            </SocialIcons>
          </Grid>

          {/* Links */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <SectionTitle>Links</SectionTitle>
            <Box
              component="ul"
              sx={{
                "& li": { mb: 1 },
                listStyleType: "none",
                paddingInlineStart: "0px",
              }}
            >
              {[
                "About Us",
                "Our Services",
                "Gallery",
                "Reviews",
                "Follow Us",
              ].map((link) => (
                <li key={link}>
                  <Link href="#" color="inherit" underline="none">
                    {link}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Opening Hours */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <SectionTitle>Horário</SectionTitle>
            <Box
              component="ul"
              sx={{
                "& li": { mb: 1 },
                listStyleType: "none",
                paddingInlineStart: "0px",
              }}
            >
              {days.map((day) => (
                <li key={day}>
                  {day}: {day === "Sunday" ? "CLOSED" : "10:00 — 19:30"}
                </li>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}
            >
              <SectionTitle>Contact</SectionTitle>
              <Box sx={{ display: { md: "none" } }}>
                <IconButton onClick={toggleMenu} size="small">
                  {isMenuOpen ? (
                    <CloseIcon sx={{ color: "#494040" }} />
                  ) : (
                    <MenuIcon sx={{ color: "#494040" }} />
                  )}
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ "& p": { mb: 1 } }}>
              <Typography>
                Address: Rua Aquiles Machado 5, 1900-077 Lisboa
              </Typography>
              <Typography>Phone: +123 456 7890</Typography>
              <Typography>WhatsApp: +123 456 7890</Typography>
              <Typography>Email: hello@sitename.com</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Mobile Menu */}
        <Collapse in={isMenuOpen}>
          <MobileMenu>
            <Box
              onClick={toggleMenu}
              sx={{
                width: "100%",
                display: { xs: "flex", sm: "none" },
                justifyContent: { xs: "end" },
              }}
            >
              <CloseIcon sx={{ color: "#494040" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box>
                <SectionTitle>Links</SectionTitle>
                <Box
                  component="ul"
                  sx={{ "& li": { mb: 1 }, listStyleType: "none" }}
                >
                  {[
                    "About Us",
                    "Our Services",
                    "Gallery",
                    "Reviews",
                    "Follow Us",
                  ].map((link) => (
                    <li key={link} sx={{}}>
                      <Link href="#" color="inherit" underline="none">
                        {link}
                      </Link>
                    </li>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: { xs: 3, sm: 0 }, ml: { sm: 4 } }}>
                <SectionTitle>Horário</SectionTitle>
                <Box component="ul" sx={{ "& li": { mb: 1 } }}>
                  {days.map((day) => (
                    <li key={day}>
                      {day}: {day === "Sunday" ? "CLOSED" : "10:00 — 19:30"}
                    </li>
                  ))}
                </Box>
              </Box>
            </Box>
          </MobileMenu>
        </Collapse>

        {/* Footer Bottom */}
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>© PARAÍSO DAS PRINCESAS 2024</Typography>
          <Box sx={{ "& > a": { ml: 2 } }}>
            <Link href="#" color="inherit" underline="none">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="none">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
