import React from "react";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import ProfileImg from "../../assets/Testimonials/ProfileImg.svg";
import LeftArrow from "../../assets/OurServices/LeftArrow.svg";
import RightArrow from "../../assets/OurServices/RightArrow.svg";
import StarIcon from "../../assets/Testimonials/Star.svg";
import BrownStarIcon from "../../assets/Testimonials/BrownStar.svg";
import SvgComponent from "../SvgComponent";

const Testimonials = () => {
  return (
    <Box
      sx={{
        width: "full",
        maxWidth: "1920px",
        mx: "0px",
        px: { xs: 2, sm: "30px", xl: "250px" },
        py: { xs: 4, sm: 0 },
        spaceY: { sm: 10 },
        position: "relative",
      }}
    >
      {/* Heading Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          alignItems: "center",

          mb: { xs: "24px", sm: "32px", lg: "80px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            fontFamily: "Cormorant, serif",
            color: "#494040",
            fontSize: { xs: "32px" },
            lineHeight: "40px",
            fontWeight: "normal",
            borderLeft: "1px solid #DDC3BB",
            pl: 2,
          }}
        >
          Testimonials
        </Typography>

        {/* Google Reviews Section */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
          <Typography variant="h6" sx={{ mr: 1 }}>
            Google Reviews
          </Typography>
          <Box sx={{ display: "flex", mr: 1 }}>
            {Array(5)
              .fill()
              .map((_, index) => (
                <Box
                  component="img"
                  key={index}
                  src={StarIcon}
                  alt="Star Icon"
                  sx={{ width: 24, height: 24, objectFit: "contain" }}
                />
              ))}
          </Box>
          <Typography>4.9</Typography>
        </Box>
      </Box>

      {/* Testimonial Content Section */}
      <Box
        sx={{
          minWidth: "100%",
          height: 416,
          px: { xs: 2, md: 3 },
          py: { xs: 4, md: 8 },
          backgroundColor: "#faf6f2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            src={ProfileImg}
            alt="Maria Santos"
            sx={{ width: 48, height: 48 }}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Cormorant, serif",
              fontSize: "24px",
              color: "#83635c",
              textAlign: "center",
            }}
          >
            Maria Santos
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <Box component="img" src={LeftArrow} alt="Left Arrow" />
          </IconButton>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Mulish, sans-serif",
              fontSize: "16px",
              color: "#494040",
              fontWeight: "light",
              px: { md: "32px", lg: "25%" },
            }}
          >
            I have been a very satisfied client for over 20 years. Fatumata
            became a really good friend. Plus, she is an expert in her line of
            work.
          </Typography>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <Box component="img" src={RightArrow} alt="Right Arrow" />
          </IconButton>
        </Box>

        {/* Mobile Arrows and Star Ratings */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: 360,
            width: "100%",
            gap: 2,
            // px: 2,
          }}
        >
          <IconButton
            sx={{
              display: { xs: "flex", sm: "none" },
              border: "1px solid #ddc3ba40",
              px: "16px",
              py: "12px",
              borderRadius: "0px",
            }}
          >
            <Box component="img" src={LeftArrow} alt="Left Arrow" />
          </IconButton>
          <Box sx={{ display: "flex", gap: 1 }}>
            {Array(5)
              .fill()
              .map((_, index) => (
                <Box
                  component="img"
                  key={index}
                  src={StarIcon}
                  alt="Star Icon"
                  sx={{ width: 24, height: 24, objectFit: "contain" }}
                />
              ))}
          </Box>
          <IconButton
            sx={{
              display: { xs: "flex", sm: "none" },
              border: "1px solid #ddc3ba40",
              px: "16px",
              py: "12px",
              borderRadius: "0px",
            }}
          >
            <Box component="img" src={RightArrow} alt="Right Arrow" />
          </IconButton>
        </Box>
      </Box>

      {/* Customer Inquiry Section */}
      <Box
        sx={{ px: { lg: 8, xl: 16, "2xl": 24 }, textAlign: "center", mt: 4 }}
      >
        <Typography
          sx={{
            width: "full",
            fontFamily: "Cormorant, serif",
            fontSize: { xs: "16px", md: "32px" },
            lineHeight: { xs: "24px", md: "48px" },
            color: "#83635c",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          É cliente? Deixe o seu comentário
        </Typography>
      </Box>

      {/* Review Submission Section */}
      <Box
        sx={{
          maxWidth: 360,
          minWidth: "100%",
          height: 270,
          p: 3,
          mt: 4,
          border: "1px solid #ddc3ba40",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: { sx: 1, md: 2 } }}>
          {Array(5)
            .fill()
            .map((_, index) => (
              <Box
                component="img"
                key={index}
                src={BrownStarIcon}
                alt="Brown Star Icon"
                sx={{ width: 24, height: 24, objectFit: "contain" }}
              />
            ))}
          <Typography
            sx={{
              fontFamily: "Mulish, sans-serif",
              color: "#494040",
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: "24px",
            }}
          >
            Elecioneaa classificação
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: "Mulish, sans-serif",
              color: "#83635c",
              fontSize: "16px",
              mb: 2,
            }}
          >
            A few things to consider in your review
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {["Service Requested", "Quality", "Vibe"].map((item) => (
              <Box
                key={item}
                sx={{ backgroundColor: "#efede7", px: 1, py: 0.5 }}
              >
                <Typography
                  sx={{
                    fontFamily: "mulish",
                    color: "#494040",
                    fontSize: "14px",
                    fontWeight: "light",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Submit Button */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: "flex-start", md: "center" }, // Center at md screen and above
          mt: { xs: 2, md: 4 },
        }}
      >
        <Button
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "332px" }, // Limit button width at md and above
            backgroundColor: "#a4775e",
            color: "white",
            textTransform: "uppercase",
            fontFamily: "Cormorant, serif",
            fontSize: { xs: "24px", md: "20px" },
            lineHeight: "24px",
            fontWeight: "500",
            borderRadius: "0px",
            px: "48px",
            py: "32px",
            "&:hover": { backgroundColor: "#925d49" },
          }}
        >
          Deixar comentários
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials;
