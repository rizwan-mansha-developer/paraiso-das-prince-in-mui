import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import MobileBg from "../../assets/Offers/MobileBg.svg";
import TabletBg from "../../assets/Offers/TabletBg.svg";
import DesktopBg from "../../assets/Offers/DesktopBg.svg";

// Styled components
const BackgroundImage = styled("img")({
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  objectFit: "cover",
  zIndex: 0,
});

const BlurOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  maxWidth: "1920px",
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(30, 30, 30, 0.4)",
  backdropFilter: "blur(5px)",
  color: theme.palette.common.white,
  [theme.breakpoints.up("lg")]: {
    left: "50%",
    width: "50%",
    height: "100%",
  },
}));

const Offers = () => {
  return (
    <Box position="relative" width="100%" mt={10}>
      {/* Background Images for different screen sizes */}
      <BackgroundImage
        src={TabletBg}
        alt="Tablet background"
        sx={{
          display: { xs: "none", sm: "block", lg: "none" },
          minHeight: "592px",
        }}
      />
      <BackgroundImage
        src={DesktopBg}
        alt="Desktop background"
        sx={{
          display: { xs: "none", lg: "block" },

          minHeight: "592px",
          maxHeight: "920px",
        }}
      />
      <BackgroundImage
        src={MobileBg}
        alt="Mobile background"
        sx={{
          display: { xs: "block", sm: "none" },
          minHeight: "735px",
        }}
      />

      {/* Blur Section */}
      <BlurOverlay
        sx={{
          py: {
            xs: "0px",
          },
          display: { sm: "flex" },
          justifyContent: { sm: "center" },
          alignItems: { sm: "center" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          sx={{
            width: { lg: "100%" },
            maxWidth: { sm: "360px", md: "455px", lg: "500px", xl: "688px" },
            marginTop: {md:"104px",lg: "170px", xl: "198px" },
            marginBottom: { md: "85px", lg:"0px" },
            marginLeft: { lg: "170px", xl: "180px" },
            justifyContent: { xs: "center", lg: "start" },
            alignItems: { xs: "center", lg: "start" },
            textAlign: { xs: "center", lg: "start" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "cormorant",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: {
                xs: "49px",
                sm: "50px",
                md: "56px",
                lg: "64px",
                xl: "96px",
              },
              textTransform: "uppercase",
              letterSpacing: "-1%",
              lineHeight: { xs: "50px", sm: "50px", md: "64px", xl: "90px" },
              marginBottom: { md: "8px" },
            }}
          >
            Oferecemos 15% de desconto
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Cormorant, serif",
              fontWeight: 400,
              fontSize: { xs: "24px", md: "32px", lg: "40px", xl: "48px" },
              letterSpacing: "-0.24px",
              lineHeight: { xs: "28px", md: "64px" },
              textTransform: "uppercase",
              marginBottom: { xs: "40px", lg: "80px" },
            }}
          >
            na sua primeira visita
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", sm: "block" },
              borderRadius: "0px",
              bgcolor: "#a4775e",
              height: "72px",
              px: 6,
              py: 1.5,
              textTransform: "uppercase",
              fontSize: "24px",
              fontFamily: "cormorant",
              "&:hover": {
                bgcolor: "#a4775e",
              },
            }}
          >
            Fazer Marcação
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            px: "15px",
            display: { xs: "block", sm: "none" },
          }}
        >
          <Button
          fullWidth
            variant="contained"
            sx={{
              borderRadius: "0px",
              bgcolor: "#a4775e",
              height: "72px",
              px: 6,
              py: 1.5,

              textTransform: "uppercase",
              fontSize: "24px",
              fontFamily: "cormorant",
              "&:hover": {
                bgcolor: "#a4775e",
              },
            }}
          >
            Fazer Marcação
          </Button>
        </Box>
      </BlurOverlay>
    </Box>
  );
};

export default Offers;
