import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroSlider = ({ SliderContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? SliderContent.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === SliderContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box position="relative" width="100%">
      {/* Carousel wrapper */}
      <Box
        sx={{
          position: "relative",
          height: 135,
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        {SliderContent.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              position: "absolute",
              width: "100%",
              height: 135,
              transition: "opacity 0.3s ease-in-out",
              opacity: index === activeIndex ? 1 : 0,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              sx={{ color: "#fff" }}
            >
              <img
                src={item.icon}
                alt={item.title}
                style={{ width: 48, height: 48 }}
              />
              <Box mt={2}>
                <Typography variant="subtitle3" textAlign="center">
                  {item.title}
                </Typography>
                <Typography textAlign="center" fontFamily="mulish">
                  {item.detail1}
                </Typography>
                <Typography
                  fontWeight="300"
                  textAlign="center"
                  fontFamily="mulish"
                  fontSize="16px"
                  lineHeight="24px"
                >
                  {item.detail2}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handlePrevClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(255, 255, 255, 0.3)",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.5)" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNextClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(255, 255, 255, 0.3)",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.5)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HeroSlider;
