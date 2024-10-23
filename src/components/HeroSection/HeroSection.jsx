import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImageLarge from "../../assets/HeroAssets/HeroImage.png";
import heroImageMedium from "../../assets/HeroAssets/TabImg.png";
import heroImageSmall from "../../assets/HeroAssets/MobileImg.png";
import LocationIcon from "../../assets/HeroSlider/location.svg";
import ParkingIcon from "../../assets/HeroAssets/parking.svg";
import MetroIcon from "../../assets/HeroAssets/metro.svg";
import HeroSlider from "./HeroSlider";
import ImagesGrid from "./ImagesGrid";

const SliderContent = [
  {
    id: 1,
    icon: LocationIcon,
    title: "Address:",
    detail1: "Rua Aquiles Machado 5",
    detail2: "1900-077 Lisboa",
  },
  {
    id: 2,
    icon: ParkingIcon,
    title: "Parking:",
    detail1: "Parqueamento ",
    detail2: "Junto ao salão",
  },
  {
    id: 3,
    icon: MetroIcon,
    title: "Metro:",
    detail1: "Estação de Metro ",
    detail2: "junto salão",
  },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: {
          xs: `url(${heroImageSmall})`,
          sm: `url(${heroImageSmall})`,
          md: `url(${heroImageMedium})`,
          lg: `url(${heroImageLarge})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          paddingTop: { xs: "495px", sm: "495px", md: "495px", lg: "331px" },
          paddingLeft: { md: "28px", lg: "150px", xl: "250px" },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            mb: 2,
            fontStyle: "italic",
            textAlign: { md: "start" },
            fontSize: {
              xs: "52px",
              sm: "80px",
              md: "112px",
              lg: "112px",
              xl: "120px",
            },
            lineHeight: {
              xs: "64px",
              md: "110px",
              lg: "64px",
            },
            fontWeight: 300,
            fontFamily: "cormorant",
          }}
        >
          CABELO SEDOSO
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: { md: "634px", lg: "643px" },
            mb: 4,
            textTransform: "uppercase",
            fontWeight: 400,
            textAlign: { md: "start" },
            fontSize: {
              xs: "24px",
              sm: "36px",
              md: "47px",
              lg: "47px",
            },
            lineHeight: { xs: "28px", sm: "52px", md: "52px", lg: "56px" },
          }}
        >
          Não acontece por acaso Acontece por marcação
        </Typography>
        <Box
          sx={{ paddingX: { xs: "15px", sm: "15px", md: "15px", lg: "0px" } }}
        >
          <Button
            variant="contained"
            sx={{
              paddingY: "24px",
              paddingX: "48px",
              backgroundColor: "#A5775E",
              width: "100%",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: 500,
              fontFamily: "cormorant",
              borderRadius: "0px",
              width: "100%",
              maxWidth: { lg: "288px" },
              display: { lg: "flex" },
              alignItems: { lg: "start" },
            }}
          >
            FAZER MARCAÇÃO
          </Button>
        </Box>
        <Box sx={{ paddingTop: "48px", display: { md: "none" } }}>
          <HeroSlider SliderContent={SliderContent} />
        </Box>
        <Box sx={{ paddingTop: "48px", display: { md: "block" } }}>
          <ImagesGrid SliderContent={SliderContent} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
