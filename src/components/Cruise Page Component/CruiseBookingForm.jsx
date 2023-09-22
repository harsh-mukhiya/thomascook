import React, { useState } from "react";
import "../Flight Page Component/FlightBookingForm.css";
import axios from "axios";
import { citiesList } from "../../static/citiesList";
import { sailMonths } from "../../static/citiesList";
import { sailCities } from "../../static/citiesList";
import { sailDays } from "../../static/citiesList";
const CruiseBookingForm = ({setCruise}) => {
  const [tripType, setTripType] = useState("One Way");
  const [error, setError] = useState();
  const [data, setData] = useState({
    departureCity: "",
    sailMonth: "",
    sailNights: "",
  });

  const { departureCity, sailMonth, sailNights } = data;
  const onChangeHandler = (event) => {
    setError();
    setData({ ...data, [event.target.name]: event.target.value });
  };
 
  function submitCheck(e) {
    e.preventDefault();

    if (departureCity == "") setError(`Departure is required`);
    else if (sailNights == "") setError(`Arrival is required`);
    else if (sailMonth == "") setError(`Date is required`);
    else {
      setError();
      submitAction(e);
    }
  }
  const submitAction = async (e) => {
    e.preventDefault();

    const apiUrl = `http://localhost:5147/api/PublicData/filteredCruiseDetails?departure_city=${data.departureCity}&sail_month=${data.sailMonth}&sail_nights=${data.sailNights}`;
    try {
      const result = await axios.get(apiUrl);
      console.log(result);
      setCruise(result.data);
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
            Book Cheap <span>Cruise</span>
          </h1>
        </div>
        
        
          <form action="" className="flight-input-form" onSubmit={submitCheck}>
            <div>
              {" "}
              <i class="fa fa-plane" aria-hidden="true"></i>{" "}
              <select
                name="departureCity"
                value={departureCity}
                onChange={onChangeHandler}
              >
                <option value="" disabled selected>
                  Departure City
                </option>
                {sailCities.map((sailCities, index) => (
                  <option key={index} value={`${sailCities.name}, ${sailCities.country}`}>
                    {`${sailCities.name} (${sailCities.country})`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              {" "}
              <i class="fas fa-map-marked-alt"></i>{" "}
              <select
                name="sailMonth"
                value={sailMonth}
                onChange={onChangeHandler}
              >
                <option value="" disabled selected>
                  Sail Month
                </option>
                {sailMonths.map((sailMonths, index) => (
                  <option key={index} value={sailMonths.month}>
                    {`${sailMonths.month} (${sailMonths.year})`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {" "}
              <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
              <select
                name="sailNights"
                value={sailNights}
                onChange={onChangeHandler}
              >
                <option value="" disabled selected>
                  Sail Nights
                </option>
                {sailDays.map((sailDays, index) => (
                  <option key={index} value={sailDays.days}>
                    {`${sailDays.days}`}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ color: "red" }}>{error}</div>
            <button button type="submit">
              <span>Find Cruise</span>
              <svg
                viewBox="-5 -5 110 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
              </svg>
            </button>
          </form>
      </div>
    </>
  );
};

export default CruiseBookingForm;
