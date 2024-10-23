import { Container } from "@mui/material";
import { styled } from "@mui/system";

const ResponsiveContainer = styled(Container)(({ theme }) => ({
  // Default styles for large screens (1920px)
  marginTop: "160px",
  marginBottom: "160px",
  paddingLeft: "250px",
  paddingRight: "250px",

  // For width 834px
  [theme.breakpoints.down("md")]: {
    marginTop: "120px",
    marginBottom: "120px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },

  // For width 390px
  [theme.breakpoints.down("sm")]: {
    marginTop: "80px",
    marginBottom: "80px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
}));
