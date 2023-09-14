import React from "react";
import herobg from "../assets/herobg.jpg";
import { motion } from "framer-motion";
import Header from "../components/searchArea/SearchArea";
import Featured from "../components/featured/Featured";


const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* <Navbar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></Navbar> */}
      {/* <div class="h-screen bg-cover bg-no-repeat"
      style={{backgroundImage: "url(" + herobg + ")"}}>
        <Header></Header>
      </div> */}
      <div>
        <Header></Header>
        <Featured></Featured>
      </div>
    </motion.div>
  );
};

export default Home;
