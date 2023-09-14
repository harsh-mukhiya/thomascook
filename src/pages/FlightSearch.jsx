import React, { useState, useEffect } from "react";
import "./FlightSearch.css";
import { Container } from "@mui/material";
import SearchResult from "../components/Flight Search Components/SearchResult";
import SearchForm from "../components/Flight Search Components/SearchForm";
import SearchHeader from "../components/Flight Search Components/SearchHeader";

function FlightSearch() {
  const [flights, setFlights] = useState([]);
  return (
    <div className="search-background">
      <Container maxWidth="lg">
        <SearchHeader />
        <SearchForm setFlights={setFlights} />
        {flights.length !== 0 ? (
          flights.map((data, index) => <SearchResult key={index} data={data} />)
        ) : (
          <h6 style={{ textAlign: "center", fontFamily: "Roboto", fontWeight: "700" }}>No flights on the given date.</h6>
        )}
      </Container>
    </div>
  );
}

export default FlightSearch;
