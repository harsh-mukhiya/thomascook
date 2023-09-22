import React, { useState } from "react";
import "./SearchForm.css"; // Updated CSS file name
import { Card } from "@mui/material";
import { citiesList } from "../../static/citiesList";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AnimatePresence, motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const schema = yup.object().shape({
  tripType: yup.string().required("Please select the type of the trip."),
  departureCity: yup
    .string()
    .notOneOf(
      [yup.ref("arrivalCity")],
      "Departure city cannot be the same as arrival city"
    )
    .required(),
  arrivalCity: yup
    .string()
    .notOneOf(
      [yup.ref("departureCity")],
      "Arrival city cannot be the same as departure city"
    )
    .required(),
  departDate: yup.string().required(),
});

function SearchForm({ setFlights }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showTravellers, setShowTravellers] = useState(false);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [infants, setInfants] = useState(0);

  const toggleTravellers = () => {
    setShowTravellers(!showTravellers);
  };

  const handleIncrement = (counterType) => {
    switch (counterType) {
      case "adults":
        setAdults(adults + 1);
        break;
      case "kids":
        setKids(kids + 1);
        break;
      case "infants":
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (counterType) => {
    switch (counterType) {
      case "adults":
        setAdults(adults > 0 ? adults - 1 : adults);
        break;
      case "kids":
        setKids(kids > 0 ? kids - 1 : kids);
        break;
      case "infants":
        setInfants(infants > 0 ? infants - 1 : infants);
        break;
      default:
        break;
    }
  };

  const isSubmitDisabled =
    errors.tripType ||
    errors.arrivalCity ||
    errors.departDate ||
    errors.departureCity ||
    (adults === 0 && kids === 0 && infants === 0);

  const onSubmit = async (data) => {
    console.log(data);

    const bookingType = data.tripType;
    const departureCity = data.departureCity;
    const arrivalCity = data.arrivalCity;
    const date = data.departDate;
   
    // Construct the URL with the parameters
    const apiUrl = `http://localhost:5147/api/PublicData/filteredFlightDetails?booking_type=${bookingType}&departure_city=${departureCity}&arrival_city=${arrivalCity}&date=${date}`;
    try {
      const result = await axios.get(apiUrl);
      console.log(result);
      setFlights(result.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Card variant="outlined" sx={{ p: 3, mb: 4, borderRadius: 0 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="horizontal-flight-input-form"
      >
        <div className="radio">
          <div className="horizontal-flight-input">
            <div>
              <input
                type="radio"
                id="html"
                name="trip-type"
                value="One Way"
                {...register("tripType")}
              />
              <label htmlFor="html">One Way</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="trip-type"
                value="Round Trip"
                {...register("tripType")}
              />
              <label htmlFor="css">Round Trip</label>
            </div>
          </div>
        </div>
        <div className="main-form-flex">
          <div
            className={`horizontal-flight-input-form-div ${
              errors.departureCity ? "error-input" : ""
            }`}
          >
            <i className="fa fa-plane input-icon" aria-hidden="true"></i>
            <select
              className="horizontal-depart-arrival"
              {...register("departureCity")}
            >
              <option value="" disabled selected>
                --Departure--
              </option>
              {citiesList.map((city, index) => (
                <option key={index} value={city.name}>
                  {`${city.name} (${city.code})`}
                </option>
              ))}
            </select>
          </div>
          <div
            className={`horizontal-flight-input-form-div ${
              errors.arrivalCity ? "error-input" : ""
            }`}
          >
            <i className="fas fa-map-marked-alt input-icon"></i>
            <select
              className="horizontal-depart-arrival"
              {...register("arrivalCity")}
            >
              <option value="" disabled selected>
                --Arrival--
              </option>
              {citiesList.map((city, index) => (
                <option key={index} value={city.name}>
                  {`${city.name} (${city.code})`}
                </option>
              ))}
            </select>
          </div>
          <div
            className={`horizontal-flight-input-form-div ${
              errors.departDate ? "error-input" : ""
            }`}
          >
            <i className="fa fa-calendar input-icon" aria-hidden="true"></i>
            <input
              placeholder="Depart On"
              type="date"
              {...register("departDate")}
            />
          </div>
          <div
            className={`horizontal-flight-input-form-div ${
              errors.numberOfTravelers ? "error-input" : ""
            }`}
          >
            <i className="fa-solid fa-people-group input-icon"></i>
            <button
              onClick={toggleTravellers}
              className="toggle-travellers"
              type="button"
            >
              Number of Travellers <ArrowDropDownIcon className={`${showTravellers ? 'rotated-icon' : ''}`} />
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="submit"
              className="horizontal-flight-submit-btn"
              disabled={isSubmitDisabled}
            >
              Search Flights
            </button>
          </div>
        </div>
        <AnimatePresence>
          {showTravellers ? (
            <motion.div
              className="travellers"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              key="travellers"
            >
              <div className="traveler-type">
                <label>Adults (+12 years)</label>
                <div className="counter">
                  <IconButton
                    aria-label="decrement"
                    color="primary"
                    onClick={() => handleDecrement("adults")}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <span className="count">{adults}</span>
                  <IconButton
                    aria-label="increment"
                    color="primary"
                    onClick={() => handleIncrement("adults")}
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
              <div className="traveler-type">
                <label>Kids (2-11 years)</label>
                <div className="counter">
                  <IconButton
                    aria-label="decrement"
                    color="primary"
                    onClick={() => handleDecrement("kids")}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <span className="count">{kids}</span>
                  <IconButton
                    aria-label="increment"
                    color="primary"
                    onClick={() => handleIncrement("kids")}
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
              <div className="traveler-type">
                <label>Infants (below 2 years)</label>
                <div className="counter">
                  <IconButton
                    aria-label="decrement"
                    color="primary"
                    onClick={() => handleDecrement("infants")}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <span className="count">{infants}</span>
                  <IconButton
                    aria-label="increment"
                    color="primary"
                    onClick={() => handleIncrement("infants")}
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </form>
    </Card>
  );
}

export default SearchForm;
