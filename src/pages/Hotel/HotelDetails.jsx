import "./hoteldetail.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from 'axios';

const HotelDetails = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const apiUrl = 'http://localhost:5147/api/PublicData/specificHotelDetails?hotelId=4';
  const [hotelData, setHotelData] = useState("");
  
  useEffect(() => {
  axios.get(apiUrl)
  .then(function (response) {
    const data = response.data;
    setHotelData(data);
    console.log('Data:', data);
    console.log('stored', hotelData.hotelId);
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
},[])

  const photos = [
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button
            type="button"
            class="bookNow focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Book Now!
          </button>
          <h1 className="text-4xl font-bold">{hotelData.hotelName}</h1>
          <div className="text-lg font-bold">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> {hotelData.city}</span>
          </div>
          <span className="hotelDistance text-lg">
            Excellent location – 500m from Connaught Place
          </span>
          <span className="hotelPriceHighlight text-lg">
            Book a stay over ₹{hotelData.normalRoomPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                <svg
                  class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p>Stay in the heart of City</p>
              </blockquote>

              <p className="mb-3 text-gray-500">
              Nestled in the heart of Delhi, our hotel is a sanctuary of luxury and tranquility amidst the vibrant energy of this historic city. Whether you're here for business or leisure, our prime location ensures that you're just moments away from the city's most iconic landmarks, cultural attractions, and business districts.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a weekend stay!</h1>
              <span>
              {hotelData.hotelDescription} 
              </span>
              <h2>
                <b>₹{hotelData.normalRoomPrice}</b> (2 nights)
              </h2>
              <h2>
                <b>₹{hotelData.deluxeRoomPrice}</b> (2 nights Deluxe Room)
              </h2>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
