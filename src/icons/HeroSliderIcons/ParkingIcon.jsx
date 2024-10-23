import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function ParkingIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6.5L6 18.5M18 18.5L6 6.50001"
          stroke="#494040"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </SvgIcon>
  );
}
