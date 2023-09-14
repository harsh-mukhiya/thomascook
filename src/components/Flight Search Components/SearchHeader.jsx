import React from "react";
import { Typography } from "@mui/material";
import "./SearchHeader.css";

function SearchHeader() {
  return (
    <div className="search-header">
      <Typography
        variant="h4"
        sx={{ fontFamily: "Roboto", fontWeight: "700", color: "#fff" }}
      >
        Book Flights
      </Typography>
    </div>
  );
}

export default SearchHeader;
