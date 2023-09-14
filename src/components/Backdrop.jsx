import React from "react";
import "./Backdrop.css";
import { motion } from "framer-motion";

const Backdrop = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={"backdrop"}
      onClick={props.showModal}
    ></motion.div>
  );
};

export default Backdrop;
