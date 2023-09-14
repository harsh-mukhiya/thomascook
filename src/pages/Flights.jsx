import React from "react";
import Header from "../components/Flight Page Component/Header";
import { motion } from "framer-motion";

const Flights = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header></Header>
    </motion.div>
  );
};

export default Flights;
