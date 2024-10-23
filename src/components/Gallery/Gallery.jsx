import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FirstImg from "../../assets/Gallery/FirstImg.png";
import SecondImg from "../../assets/Gallery/SecondImg.png";
import ThirdImg from "../../assets/Gallery/ThirdImg.png";
import FourthImg from "../../assets/Gallery/FourthImg.png";
import LeftArrow from "../../assets/OurServices/LeftArrow.svg";
import RightArrow from "../../assets/OurServices/RightArrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const images = [
    {
      url: FirstImg,
      alt: "Woman with yellow sweater",
    },
    {
      url: SecondImg,
      alt: "Woman with black dress",
    },
    {
      url: ThirdImg,
      alt: "Woman with white shirt",
    },
    {
      url: FourthImg,
      alt: "Woman with white turtleneck",
    },
    {
      url: SecondImg,
      alt: "Person with blonde hair",
    },
    {
      url: FirstImg,
      alt: "Woman with yellow sweater",
    },
    {
      url: ThirdImg,
      alt: "Woman with white shirt",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "100%",
        maxWidth: "1920px",
        mx: "auto",
        pl: { xs: 2, sm: "30px", xl: "250px" },
        py: { xs: 4 },
        "& .swiper-slide": {
          width: "auto",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          //   mt: "80px",
          mb: { xs: "24px", sm: "32px", lg: "80px" },
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            pr: { xs: 2, sm: "30px", xl: "250px" },
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
              paddingTop: "22px",
            }}
          >
            Galeria
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Woman
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "text.secondary",
              }}
            >
              Men
            </Typography>
            <Box sx={{ display: "flex", gap: 1, ml: 2 }}>
              <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "50%",
                  p: 1,
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft sx={{ width: 16, height: 16 }} />
              </IconButton>
              <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "50%",
                  p: 1,
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
                aria-label="Next slide"
              >
                <ChevronRight sx={{ width: 16, height: 16 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={16}
        slidesPerView="auto"
        mousewheel={true}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                // aspectRatio: "3/4",
                overflow: "hidden",
                borderRadius: 0,
                "& img": {
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                },
              }}
            >
              <img src={image.url} alt={image.alt} />
            </Box>
          </SwiperSlide>
        ))}

        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            my: { xs: 1, sm: 0 },
            minWidth: "100%",
            maxWidth: "360px",
            height: "40px",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
          }}
        >
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid rgba(221, 195, 186, 0.4)",
              borderRadius: 0,
            }}
            aria-label="Previous slide"
          >
            <img src={LeftArrow} alt="" />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Box sx={{ display: "flex", gap: "15%" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#000",
                  fontSize: "16px",
                  fontFamily: "mulish",
                  fontWeight: "300",
                  textDecoration: "underline",
                }}
              >
                Women
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#BBA39B",
                  fontSize: "16px",
                  fontFamily: "mulish",
                  fontWeight: "300",
                }}
              >
                Men
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid rgba(221, 195, 186, 0.4)",
              borderRadius: 0,
            }}
            aria-label="Next slide"
          >
            <img src={RightArrow} alt="" />
          </IconButton>
        </Box>
      </Swiper>
    </Box>
  );
};

export default Gallery;
