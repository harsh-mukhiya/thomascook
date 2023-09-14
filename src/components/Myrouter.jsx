import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotel/Hotels";
import Packages from "../pages/Packages/Packages";
import Cruises from "../pages/Cruises";
import Flights from "../pages/Flights";
import HotelDetails from "../pages/Hotel/HotelDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
import FlightSearch from "../pages/FlightSearch";
import Error from "../pages/Error";
import Footer from "./footer/Footer";
import MailList from "./mailList/MailList";


const Myrouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/cruises" element={<Cruises />} />
          <Route path="/flights" element={<Flights/>} />
          <Route path="/flights/search" element={<FlightSearch/>}/>
          <Route path="/hotels/details" element={<HotelDetails />} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/aboutus" element={<About/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        <MailList></MailList>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Myrouter;
