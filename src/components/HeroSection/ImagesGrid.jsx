import React from "react";
import { Grid, Box, Typography } from "@mui/material";

function ImagesGrid({ SliderContent }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: { xs: "none", md: "grid" },
        gridTemplateColumns: "repeat(3, 1fr)",
        width: { md: "100%", lg: "726px" },
      }}
    >
      {SliderContent.slice(0, 3).map((item) => (
        <Grid
          item
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            gap: "15px",
          }}
        >
          <img
            src={item.icon}
            alt={item.title}
            style={{
              width: "48px",
              height: "48px",
              marginRight: "8px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              {item.detail1}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {item.detail2}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ImagesGrid;
