import React from "react";
// import Header from "../components/Flight Page Component/Header";
import CruiseHeader from "../components/Cruise Page Component/CruiseHeader";
import { motion } from "framer-motion";

const Cruises = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CruiseHeader></CruiseHeader>
    </motion.div>
  );
};

export default Cruises;
