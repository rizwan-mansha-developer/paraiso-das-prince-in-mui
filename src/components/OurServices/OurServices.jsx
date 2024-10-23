import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BgTabDesk from "../../assets/OurServices/BgTablet.png";
import BgDesktop from "../../assets/OurServices/BgTabDesk.png";
import Est from "../../assets/OurServices/Est.png";
import Col from "../../assets/OurServices/Col.png";
import Cor from "../../assets/OurServices/Cor.png";
import Cui from "../../assets/OurServices/Cui.png";
import Tra from "../../assets/OurServices/Tra.png";
import ForwardArrow from "../../assets/OurServices/ForwardArrow.svg";
import LeftArrow from "../../assets/OurServices/LeftArrow.svg";
import RightArrow from "../../assets/OurServices/RightArrow.svg";
import BgMobile from "../../assets/OurServices/BgMobile.svg";
import SvgComponent from "../SvgComponent";

const clampStyle = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 7,
};

const OurServices = () => {
  const services = [
    {
      image: Cui,
      title: "CUIDADOS COM CABELO NATURAL",
      description:
        "Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.",
    },
    {
      image: Tra,
      title: "TRANÇAS",
      description:
        "Eleve o seu visual com tranças habilmente criadas no Paraíso das Princesas. Quer esteja à procura de um novo visual audacioso ou de um estilo protetor para manter o seu cabelo natural, os nossos serviços de tranças oferecem tanto estilo como praticidade.",
    },
    {
      image: Cor,
      title: "CORTE E MODELISMO",
      description:
        "Descubra o corte de cabelo perfeito para o seu estilo e personalidade com nossos estilistas especialistas. Do clássico ao contemporâneo, criamos looks sob medida que amplificam sua beleza natural.",
    },
    {
      image: Col,
      title: "COLORAÇÃO",
      description:
        "Transforme o seu cabelo com a nossa coloração especializada. Desde destaques subtis a tons audaciosos, os nossos coloristas dão vida à sua visão. Quer procure um look natural ou uma mudança dramática, confie em nós para resultados impecáveis.",
    },
    {
      image: Est,
      title: "ESTÉTICA E BEM-ESTAR",
      description:
        "Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "black",
        // minHeight: "100vh",
        px: { xs: 2, sm: "30px", xl: "250px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "cormorant",
          lineHeight: "40px",
          color: "#494040",
          fontWeight: "normal",
          mt: { xs: "80px", md: "120px", xl: "160px" },
          
          paddingLeft: { sx: "16px", lg: "32px" },
          borderLeft: "1px solid #FAF6F2",
          textAlign: { xs: "left", md: "left" },

          borderLeft: "1px solid #84635C",
          paddingLeft: 2,
          marginBottom: { xs: "16px", sm: "32px", lg: "80px" },
          fontSize: { xs: "32px" },
        }}
      >
        OUR SERVICES
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Main feature - always visible */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            // px: { xs: "0", sm: "30px" },
          }}
        >
          <Box
            component="img"
            src={BgDesktop}
            alt="Background Desktop"
            sx={{
              display: { xs: "none", lg: "block" },
              //   borderRadius: "16px",
              minHeight: "592px",
              width: "100%",

              height: "100%",
              maxHeight: { lg: "800px", xl: "900px" },
              objectFit: "cover",
              zIndex: 0,
            }}
          />
          <Box
            component="img"
            src={BgTabDesk}
            alt="Background Tablet"
            sx={{
              display: { xs: "none", sm: "block", lg: "none" },
              borderRadius: "0px",
              minHeight: "592px",
              width: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />
          <Box
            component="img"
            src={BgMobile}
            alt="Background Mobile"
            sx={{
              display: { xs: "block", sm: "none" },
              borderRadius: "0px",
              minHeight: "592px",
              width: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "full",
              maxWidth: { lg: "50%" },
              height: { lg: "100%" },

              zIndex: 10,
              bgcolor: "rgba(30, 30, 30, 0.4)",
              backdropFilter: "blur(10px)",
              color: "white",
              borderRadius: "0 0 16px 16px",
              gap: "32px",
              p: { xs: "24px", md: "0" },
              pl: { md: "60px", lg: "107px" },
              pt: { lg: "150px", xl: "251px" },
              py: { md: "53px" },
            }}
          >
            <Box sx={{ px: { px: "107px" }, xl: { maxWidth: "700px" } }}>
              <Typography
                variant="h3"
                sx={{
                  display: { xs: "block", md: "none" },
                  fontSize: "2rem",
                  fontFamily: "Cormorant Garamond",

                  lineHeight: "1.5",
                }}
              >
                VENDA DE CABELO NATURAL
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "32px" },
                    fontFamily: "Cormorant",
                    lineHeight: { xs: "48px" },
                  }}
                >
                  VENDA DE
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "24px", md: "64px" },
                    fontFamily: "Cormorant",
                    lineHeight: { md: "48px" },
                    fontStyle: "italic",
                  }}
                >
                  CABELO NATURAL
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                width: "100%",
                maxWidth: { md: "446px" },
                mt: { sx: "32px", md: "48px", lg: "90px" },
                fontFamily: "Mulish",
                fontWeight: "300",
                lineHeight: "24px",
                pb: { xs: "32px", lg: "64px" },
              }}
            >
              Transforme o seu visual com extensões luxuosas e perucas feitas à
              medida e aplicadas no Paraíso das Princesa. Explore a nossa
              coleções, disponíveis em diversas texturas e cores para combinar
              com o seu estilo único.
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                bgcolor: "#a4775e",
                color: "white",
                textTransform: "uppercase",
                fontFamily: "Cormorant Garamond",
                fontSize: "20px",
                lineHeight: "24px",
                py: "24px",
                px: "48px",
                justifyContent: "center",
                borderRadius: "0px",
              }}
            >
              FAZER MARCAÇÃO
            </Button>
          </Box>
        </Box>

        {/* Grid of services - visible on tablet and desktop */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: { xs: "none", md: "grid" },
              gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
              gap: 4,
              py: { xs: "6px", sm: "0", md: "12px" },
              //   px: { md: "30px" },
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  //   maxWidth: { xs: "340px", lg: "250px" },
                }}
              >
                <SvgComponent
                  src={service.image}
                  alt={service.title}
                  style={{
                    borderRadius: "8px",
                    width: "340px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    flexDirection: "column",
                    gap: "40px",
                    p: "32px",
                    bgcolor: "#FAF3F2",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#84635C",
                      fontFamily: "Cormorant Garamond",
                      fontSize: { xs: "24px", lg: "16px" },
                      fontWeight: { sm: "400", lg: "600" },
                      textTransform: "uppercase",
                      pb: { sm: "40px" },
                      lineHeight: "24px",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "300",
                      fontSize: "16px",
                      lineHeight: "24px",
                      ...clampStyle,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Discount offer in grid - only visible on lg and up */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                bgcolor: "#b08d76",
                color: "white",
                flexDirection: "column",
                justifyContent: "center",
                paddingY: "32px",
                paddingX: "64px",
                gap: "64px",
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "38px", sm: "64px" },
                    fontWeight: "300",
                    fontFamily: "cormorant",
                    textTransform: "uppercase",
                    lineHeight: { sx: "32px", sm: "64px" },
                    paddingBottom: "4px",
                  }}
                >
                  -15% DESCONTO
                </Typography>
                <Typography
                  sx={{
                    color: "#ffd8d0",
                    fontSize: "32px",
                    lineHeight: "48px",
                    fontWeight: "300",
                    textTransform: "uppercase",
                    fontStyle: "italic",
                  }}
                >
                  NA SUA PRIMEIRA VISITA
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "64px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    fontSize: "2rem",
                    fontWeight: "normal",
                    fontFamily: "Cormorant Garamond",
                  }}
                >
                  FAZER MARCAÇÃO
                </Typography>
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={ForwardArrow} alt="Forward Arrow" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Pagination Arrows for Mobile View */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            my: 2,

            minWidth: "full",

            height: "40px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #ddc3ba",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={LeftArrow} alt="Left Arrow" />
          </Box>
          <Typography
            sx={{ color: "#bba39b", fontSize: "1rem", fontWeight: "300" }}
          >
            1 / 6
          </Typography>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #ddc3ba",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={RightArrow} alt="Right Arrow" />
          </Box>
        </Box>

        {/* Discount offer - always visible on mobile */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            bgcolor: "#b08d76",
            color: "white",
            px: { xs: "24px", sm: "0" },
            pl: { sm: "64px", md: "30px" },
            py: "32px",
            flexDirection: "column",
            gap: "64px",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: "38px",
                fontWeight: "300",
                fontFamily: "cormorant",
                textTransform: "uppercase",
                lineHeight: "loose",
                tracking: "widest",
                backgroundColor: "success",
              }}
            >
              -15% DESCONTO
            </Typography>
            <Typography
              sx={{
                color: "#ffd8d0",
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "300",
                textTransform: "uppercase",
                fontStyle: "italic",
                fontFamily: "cormorant",
              }}
            >
              NA SUA PRIMEIRA VISITA
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "64px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                textTransform: "uppercase",
                fontSize: "2rem",
                fontWeight: "normal",
                fontFamily: "Cormorant Garamond",
              }}
            >
              FAZER MARCAÇÃO
            </Typography>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={ForwardArrow} alt="Forward Arrow" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
