import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import FirstImg from "../../assets/FollowUs/FirstImg.png";
import SecondImg from "../../assets/FollowUs/SecondImg.png";
import ThirdImg from "../../assets/FollowUs/ThirdImg.png";
import FourthImg from "../../assets/FollowUs/FourthImg.png";
import InstraIcon from "../../assets/FollowUs/InstraIcon.svg";
import SvgIcon from "@mui/icons-material/ArrowBackIos";

const RootContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1920px !important",
  // margin: "0 auto",
  // padding: "0 16px",
  margin: "0px",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    padding: "0 30px",
    paddingTop: "80px",
  },
  // [theme.breakpoints.up("md")]: {
  //   padding: "32px 30px",
  // },
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Cormorant",
  color: "#494040",
  fontSize: "32px",
  fontWeight: "normal",
  lineHeight: "40px",
  textTransform: "uppercase",
  paddingLeft: "16px",
  borderLeft: "1px solid #FAF6F2",
  margin: "0",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "30px",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  "& img": {
    maxWidth: "100%",
    objectFit: "contain",
  },
  [theme.breakpoints.up("xs")]: {
    "& img": {
      width: "200px",
      flex: 1,
    },
  },
}));

const SocialButton = styled(Button)(({ variant }) => ({
  minHeight: "72px",
  padding: "24px 48px",
  fontFamily: "Cormorant",
  fontSize: "20px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  borderRadius: 0,
  ...(variant === "instagram"
    ? {
        backgroundColor: "#a4775e",
        color: "white",
        "&:hover": {
          backgroundColor: "#8b6550",
        },
      }
    : {
        color: "#83635c",
        border: "1px solid #83635c",
        "&:hover": {
          backgroundColor: "rgba(131, 99, 92, 0.04)",
          border: "1px solid #83635c",
        },
      }),
}));

const SocialText = styled(Typography)(({ size = "large" }) => ({
  color: "#83635c",
  fontFamily: "Cormorant",
  fontWeight: 300,
  textTransform: "uppercase",
  ...(size === "large"
    ? {
        fontSize: "80px",
        lineHeight: "48px",
      }
    : {
        fontSize: "32px",
        lineHeight: "32px",
        textAlign: "center",
      }),
}));

const FollowUs = () => {
  const theme = useTheme();

  const renderSocialSection = (isMobile = false) => (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#faf3f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...(isMobile
          ? {
              display: { xs: "flex", lg: "none" },
            }
          : {
              display: { xs: "none", lg: "flex" },
            }),
      }}
    >
      <Box
        sx={{
          py: isMobile ? { xs: "72px", md: "102px" } : "102px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? { xs: "45px", sm: "59px" } : "45px",
        }}
      >
        <Box sx={{ width: 24, height: 24 }}>
          <img
            src={InstraIcon}
            alt="Instagram Icon"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        <SocialText
          sx={{
            fontSize: isMobile ? { xs: "48px", xl: "80px" } : "80px",
            lineHeight: isMobile ? { xs: "48px", sm: "32px" } : "48px",
          }}
        >
          Follow us
        </SocialText>

        <SocialText
          size="small"
          sx={{
            width: { sm: "100%" },
            maxWidth: { sm: "454px", md: "454px", lg: "744px" },
          }}
        >
          ON INSTAGRAM and other social networks
        </SocialText>

        <Box
          sx={{
            width: isMobile ? { xs: "100%", md: "454px" } : "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            px: isMobile ? { xs: "25px", md: 0 } : 0,
          }}
        >
          <SocialButton variant="instagram" fullWidth={isMobile}>
            Instagram
          </SocialButton>
          <SocialButton variant="outlined" fullWidth={isMobile}>
            Facebook
          </SocialButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <RootContainer sx={{ px: { xs: 2, sm: "30px", xl: "250px" } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "80px",
          mb: "24px",
          gap: 5,
        }}
      >
        <HeaderTitle>Follow Us On Instagram</HeaderTitle>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#494040",
              fontSize: "16px",
              fontFamily: "Mulish",
              fontWeight: 300,
            }}
          >
            Follow Us
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          width: "100%",
        }}
      >
        <ImageWrapper sx={{ display: { xs: "none", sm: "flex" } }}>
          <img src={FirstImg} alt="First Image" />

          <img src={SecondImg} alt="Second Image" />
        </ImageWrapper>

        <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
          <img
            src={FirstImg}
            alt="First Image"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Box>

        {/* Mobile/Tablet Social Section */}
        {renderSocialSection(true)}

        {/* Mobile Second Image */}
        <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
          <img
            src={SecondImg}
            alt="Second Image"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Box>

        <ImageWrapper sx={{ display: { xs: "none", sm: "flex" } }}>
          <img src={ThirdImg} alt="Third Image" />
          <img src={FourthImg} alt="Fourth Image" />
        </ImageWrapper>
      </Box>

      {/* Desktop Social Section */}
      {renderSocialSection()}
    </RootContainer>
  );
};

export default FollowUs;
