import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import axios from "axios";
import "./FlightBookingForm.css";

import { citiesList } from "../../static/citiesList";
const FlightBookingForm = ({flightData, setFlightsData}) => {
  const [tripType, setTripType] = useState("One Way");
  const [error, setError] = useState();
  const [data, setData] = useState({
    
    departureCity: "",
    arrivalCity: "",
    date: "",

  });
 
  const { departureCity, arrivalCity, date } = data;
  const onChangeHandler = (event) => {
    setError();
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onOptionChange = (e) => {
    setTripType(e.target.value);
  };
  const [openAccordian, setOpenAccordian] = useState(false);
  const toggleAccordian = () => {
    setOpenAccordian((prev) => !prev);
  };
  let [adultCount, setAdultCount] = useState(0);

  function incrementCount() {
    adultCount = adultCount + 1;
    setAdultCount(adultCount);
  }
  function decrementCount() {
    adultCount = adultCount - 1;
    if (adultCount < 0) adultCount = 0;
    setAdultCount(adultCount);
  }
  let [childCount, setChildCount] = useState(0);

  function incrementChildCount() {
    childCount = childCount + 1;
    setChildCount(childCount);
  }
  function decrementChildCount() {
    childCount = childCount - 1;
    if (childCount < 0) childCount = 0;
    setChildCount(childCount);
  }
  let [infantCount, setInfantCount] = useState(0);
  function incrementInfantCount() {
    infantCount = infantCount + 1;
    setInfantCount(infantCount);
  }
  function decrementInfantCount() {
    infantCount = infantCount - 1;
    if (infantCount < 0) infantCount = 0;
    setInfantCount(infantCount);
  }
  function submitCheck(e) {
    e.preventDefault();

    if (departureCity == "") setError(`Departure is required`);
    else if (arrivalCity == "") setError(`Arrival is required`);
 
    else if (date == "") setError(`Date is required`);
    else {
      setError();
      submitAction(e);
    }
  }
  const submitAction = async (e) => {
    e.preventDefault();
    
    const apiUrl = `http://localhost:5147/api/PublicData/filteredFlightDetails?booking_type=${tripType}&departure_city=${data.departureCity}&arrival_city=${data.arrivalCity}&date=${data.date}`;
    try {
      const result = await axios.get(apiUrl);
      console.log(result);
      setFlightsData(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flight-form">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <h1>
            Book Cheap <span>Flights</span>
          </h1>
        </div>
        <div>
          <div className="flight-input">
            <div>
              <input
                type="radio"
                id="html"
                name="tripType"
                value="One Way"
                checked={tripType === "One Way"}
                onChange={onOptionChange}
              />
              <p for="html">One Way</p>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="tripType"
                value="Round Trip"
                checked={tripType === "Round Trip"}
                onChange={onOptionChange}
              />
              <p for="css">Round Trip</p>
            </div>
          </div>
        </div>
        {tripType == "One Way" && (
          <form className="flight-input-form" onSubmit={submitCheck}>
            <div>
              {" "}
              <i class="fa fa-plane" aria-hidden="true"></i>{" "}
              <select name="departureCity" value={departureCity} onChange={onChangeHandler}>
                <option value="" disabled selected>Departure</option>
                {citiesList.map((city, index) => (
                <option key={index} value={city.name}>
                  {`${city.name} (${city.code})`}
                </option>
              ))}
              </select>
            </div>

            <div>
              {" "}
              <i class="fas fa-map-marked-alt"></i>{" "}
              <select name="arrivalCity" value={arrivalCity} onChange={onChangeHandler}>
                <option value="" disabled selected>Arrival</option>
                {citiesList.map((city, index) => (
                <option key={index} value={city.name}>
                  {`${city.name} (${city.code})`}
                </option>
              ))}
              </select>
            </div>
            <div>
              {" "}
              <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
              <input
                placeholder="Depart On"
                name="date"
                type="text"
                onChange={onChangeHandler}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                id="date"
                value={date}
                
              ></input>
            </div>
            <div onClick={toggleAccordian}>
              {" "}
              <i class="fa-solid fa-people-group"></i>{" "}
              <input type="text" placeholder="Travellers" disabled></input>
              <i
                class="fa-solid fa-chevron-down"
                style={{ width: "5%", border: "none" }}
              ></i>
            </div>
            {openAccordian && (
              <form className="flight-accordian">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="traveller-data-heading">
                    Adult
                    <span style={{ color: "grey" }}>
                      {" "}
                      &#40;+12 years&#41;
                    </span>{" "}
                  </p>{" "}
                  <div style={{ display: "flex" }}>
                    <button
                      className="plus"
                      type="button"
                      onClick={incrementCount}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="data-travellers">{adultCount}</div>
                    <button
                      className="minus"
                      type="button"
                      onClick={decrementCount}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="traveller-data-heading">
                    Child{" "}
                    <span style={{ color: "grey" }}> &#40;2-11 years&#41;</span>{" "}
                  </p>{" "}
                  <div style={{ display: "flex" }}>
                    <button
                      className="plus"
                      type="button"
                      onClick={incrementChildCount}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="data-travellers">{childCount}</div>
                    <button
                      type="button"
                      className="minus"
                      onClick={decrementChildCount}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="traveller-data-heading">
                    Infant
                    <span style={{ color: "grey" }}>
                      {" "}
                      &#40;below 2 years&#41;
                    </span>
                  </p>{" "}
                  <div style={{ display: "flex" }}>
                    <button
                      className="plus"
                      type="button"
                      onClick={incrementInfantCount}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="data-travellers">{infantCount}</div>
                    <button
                      type="button"
                      className="minus"
                      onClick={decrementInfantCount}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <hr></hr>
                <h3>Travellers Class</h3>
                <div className="flight-input-class">
                  <div>
                    <input
                      type="radio"
                      id="economy"
                      name="trav-class"
                      value="Economy"
                      defaultChecked
                    />
                    <p for="html">Economy</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="premium"
                      name="trav-class"
                      value="Premium Economy"
                    />
                    <p for="css">Premium Economy</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="business"
                      name="trav-class"
                      value="business"
                    />
                    <p for="html">Business</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="first"
                      name="trav-class"
                      value="One Way"
                    />
                    <p for="first">First</p>
                  </div>
                </div>
              </form>
            )}
             <div style={{ color: "red" }}>{error}</div>
            <button type="submit">
              <span>Find Flights</span>
              <svg
                viewBox="-5 -5 110 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
              </svg>
            </button>
          </form>
        )}
        {tripType == "Round Trip" && (
          <form action="" className="flight-input-form">
            <div>
              {" "}
              <i class="fa fa-plane" aria-hidden="true"></i>{" "}
              <select name="departureCity" value={departureCity} onChange={onChangeHandler}>
                <option value="" disabled selected>Departure</option>
                {citiesList.map((city, index) => (
                <option key={index} value={city.name}>
                  {`${city.name} (${city.code})`}
                </option>
              ))}
              </select>
            </div>

            <div>
              {" "}
              <i class="fas fa-map-marked-alt"></i>{" "}
                <select name="arrivalCity" value={arrivalCity} onChange={onChangeHandler}>
                  <option value="" disabled selected>Arrival</option>
                  {citiesList.map((city, index) => (
                  <option key={index} value={city.name}>
                    {`${city.name} (${city.code})`}
                  </option>
                ))}
                </select>
            </div>
            <div>
              {" "}
              <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
              <input
                placeholder="Depart on"
                type="text"
                onChange={onChangeHandler}
                value={date}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                id="date"
              ></input>
            </div>

            <div onClick={toggleAccordian}>
              {" "}
              <i class="fa-solid fa-people-group"></i>{" "}
              <input type="text" placeholder="Travellers" disabled></input>
              <i
                class="fa-solid fa-chevron-down"
                style={{ width: "5%", border: "none" }}
              ></i>
            </div>
            <div>
              {" "}
              <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
              <input
                placeholder="Return on"
                type="text"
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                id="date"
              ></input>
            </div>
            {openAccordian && (
              <form className="flight-accordian">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="traveller-data-heading">
                    Adult
                    <span style={{ color: "grey" }}>
                      {" "}
                      &#40;+12 years&#41;
                    </span>{" "}
                  </p>{" "}
                  <div style={{ display: "flex" }}>
                    <button
                      className="plus"
                      type="button"
                      onClick={incrementCount}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="data-travellers">{adultCount}</div>
                    <button
                      className="minus"
                      type="button"
                      onClick={decrementCount}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="traveller-data-heading">
                    Child{" "}
                    <span style={{ color: "grey" }}> &#40;2-11 years&#41;</span>{" "}
                  </p>{" "}
                  <div style={{ display: "flex" }}>
                    <button
                      className="plus"
                      type="button"
                      onClick={incrementChildCount}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="data-travellers">{childCount}</div>
                    <button
                      type="button"
                      className="minus"
                      onClick={decrementChildCount}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="traveller-data-heading">
                    Infant
                    <span style={{ color: "grey" }}>
                      {" "}
                      &#40;below 2 years&#41;
                    </span>
                  </p>{" "}
                  <div style={{ display: "flex" }}>
                    <button
                      className="plus"
                      type="button"
                      onClick={incrementInfantCount}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="data-travellers">{infantCount}</div>
                    <button
                      type="button"
                      className="minus"
                      onClick={decrementInfantCount}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                <hr></hr>
                <h3>Travellers Class</h3>
                <div className="flight-input-class">
                  <div>
                    <input
                      type="radio"
                      id="economy"
                      name="trav-class"
                      value="Economy"
                      defaultChecked
                    />
                    <p for="html">Economy</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="premium"
                      name="trav-class"
                      value="Premium Economy"
                    />
                    <p for="css">Premium Economy</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="business"
                      name="trav-class"
                      value="business"
                    />
                    <p for="html">Business</p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="first"
                      name="trav-class"
                      value="One Way"
                    />
                    <p for="first">First</p>
                  </div>
                </div>
              </form>
            )}
           <div style={{ color: "red" }}>{error}</div>
            <button button type="submit">
              <span>Find Flights</span>
              <svg
                viewBox="-5 -5 110 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default FlightBookingForm;
