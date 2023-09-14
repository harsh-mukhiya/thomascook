import { Box, Card, Grid, Typography, Button } from "@mui/material";
import airIndia from "../../assets/airlines/airindia.png";
import airAsia from "../../assets/airlines/airasia.png";
import goAir from "../../assets/airlines/goair.png";
import indigo from "../../assets/airlines/indigo.png";
import jetAirways from "../../assets/airlines/jetairways.png";
import spiceJet from "../../assets/airlines/spicejet.png";
import vistara from "../../assets/airlines/vistara.png";
import React from "react";
import { citiesCodeMap } from "../../static/citiesList";

const logoMap = {
  "Air India": airIndia,
  "IndiGo": indigo,
  "SpiceJet": spiceJet,
  "GoAir": goAir,
  "Vistara": vistara,
  "AirAsia": airAsia,
  "Jet Airways": jetAirways
}

function SearchResult({data}) {
  return (
    <Card variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 2 }}>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoMap[data?.flight_name]}
              style={{ width: "50px", display: "inline", marginRight: "10px" }}
              alt=""
            />
            <Typography variant="caption">{data?.flight_name} SG393</Typography>
          </Box>
          <Box>
            <Typography variant="h6">{data?.departure_time}</Typography>
            <Typography variant="body2">{citiesCodeMap[data?.departure_city]}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Non Stop</Typography>
            <Typography variant="body2">{data?.flight_duration}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">{data?.arrival_time}</Typography>
            <Typography variant="body2">{citiesCodeMap[data?.arrival_city]}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{mr: 2}}>
            <Typography variant="h6">₹ {data?.cost}</Typography>
          </Box>
          <Box>
            <Button variant="contained">Book</Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SearchResult;
