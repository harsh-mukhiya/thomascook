import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver
import * as yup from "yup";
import "./Register.css";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";


const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone must be numeric")
    .required("Phone is required"),
});

const Register = () => {
  const { toggleRegister } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Use yupResolver
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Here, you can access the form data in the `data` object with validations applied
      setIsSubmitting(true);
      setError(null); // Clear any previous errors
      const response = await axios.post(
        "http://localhost:5147/api/Auth/Register",
        data
      );
      // Handle successful registration here, e.g., show a success message
      toggleRegister();
      toast.success("Registration Successful!");
      console.log(response);
    } catch (error) {
      // Handle errors that might occur during registration
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again."); // Set the error message
    } finally {
      setIsSubmitting(false);
    }

  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="register-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="reg-container">
          <h1>Register to ThomasCook</h1>

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder={
              errors.username ? "Please enter a username" : "Enter Username"
            }
            {...register("username")}
            className={errors.username ? "error" : ""}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder={
              errors.email ? "Please enter a valid email" : "Enter Email"
            }
            name="email"
            {...register("email")}
            className={errors.email ? "error" : ""}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder={
              errors.password
                ? "Please enter a valid password"
                : "Enter Password"
            }
            name="password"
            {...register("password")}
            className={errors.password ? "error" : ""}
          />

          <label htmlFor="phoneCode">
            <b>Phone Number</b>
          </label>
          <br />
          {/* <select
            name="phoneCode"
            {...register("phoneCode")}
            className={errors.phoneCode ? "error" : ""}
          >
            <option value="">Code</option>
            <option value="+1">+1 (United States)</option>
            <option value="+44">+44 (United Kingdom)</option>
            <option value="+91">+91 (India)</option>
            <option value="+86">+86 (China)</option>
            <option value="+81">+81 (Japan)</option>
          </select> */}

          <input
            type="text"
            name="phone"
            placeholder={
              errors.phone
                ? "Please enter a valid phone number"
                : "Enter Phone Number"
            }
            {...register("phone")}
            className={errors.phone ? "error" : ""}
          />
          {isSubmitting && (
            <div className="spinner">
              {/* Use the FaSpinner component from react-icons */}
              <FaSpinner className="spinner-icon" />
            </div>
          )}
          <div className="error-message">
            {error && <p className="error-text">{error}</p>}
          </div>

          <p style={{ textAlign: "center" }}>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Register;
