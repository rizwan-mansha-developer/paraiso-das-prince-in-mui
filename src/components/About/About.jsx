import React from "react";
import { Box, Typography } from "@mui/material";
import AboutImg from "../../assets/About/AboutImg.png";

const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1921px",
        width: "100%",
        height: "auto",
        display: "flex",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "100%",
          bgcolor: "#faf5f2",
        }}
      >
        <Box
          component="img"
          src={AboutImg}
          alt="About Us"
          sx={{
            width: "100%",
            maxWidth: "771px",
            minWidth: { lg: "100%" },
            height: { md: "100%" },
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          backgroundColor: "#FAF6F2",
          width: "100%",
          borderLeft: "1px solid #FAF6F2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "8px",
          paddingTop: { xs: "123px", md: "96px", lg: "100px", "2xl": "156px" },
          paddingBottom: { xs: "122px", md: "120px", lg: "100px" },
          paddingLeft: {
            xs: "0",
            lg: "100px",
            xl: "200px",
          },
          paddingRight: { xl: "150px" },
        }}
      >
        {/* Content Box */}
        <Box
          sx={{
            minWidth: "100%",
            maxWidth: "700px",
            borderLeft: { lg: "1px solid #DDC3BB" },
            marginX: { xs: "auto", md: "0" },
            textAlign: { xs: "center", md: "start" },
            paddingLeft: { customMd: "34px", lg: "32px" },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: "#494040",
              fontSize: "32px",
              fontWeight: "normal",
              textTransform: "uppercase",
              lineHeight: "2.5rem",
              paddingX: { xs: "40px", md: "50px", xl: "0px" },
              fontFamily: "Cormorant Garamond",
            }}
          >
            About us
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: "Mulish",
              maxWidth: "668px",
              width: "100%",
              color: "#494040",
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: { xs: "normal", md: "24px" },
              paddingX: { xs: "40px", md: "50px", xl: "0px" },
              paddingTop: "32px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Nutrindo a beleza de cada fio há mais de 18 anos, trazemos uma
            riqueza de experiência e paixão aos nossos clientes. No Paraíso das
            Princesas, criamos experiências personalizadas que elevam a sua
            confiança e o seu estilo. Desde a aplicação de extensões, à estética
            e criações vanguardistas, somos especializados em dar vida à sua
            visão.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
