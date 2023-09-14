import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver
import * as yup from "yup";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Use yupResolver
  });

  const { login, toggleLogin } = useAuth();
  const [loginError, setLoginError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Event handler for form submission
  const onSubmit = async (data) => {
    try {
      setLoginError(null);
      setIsSubmitting(true);
      const response = await axios.post(
        "http://localhost:5147/api/Auth/Login",
        data
      );
      if (response.data.token) {
        // Authentication was successful, clear the login error and store the token
        setLoginError(null);
        login(response.data.token);
        toggleLogin();
      } else {
        // The response didn't contain a token, handle this as an authentication failure
        setLoginError("Authentication failed: Token not received");
      }
    } catch (error) {
      if (error.response) {
        // The server responded with an error status code (e.g., 4xx or 5xx)
        if (error.response.status === 401) {
          // Authentication failed (invalid credentials)
          setLoginError("Authentication failed: Invalid credentials");
        } else {
          // Other server errors
          setLoginError("Server error: " + error.response.data.message);
        }
      } else if (error.request) {
        // The request was made but no response was received (e.g., network issue)
        setLoginError("Network error: " + error.message);
      } else {
        // Something else went wrong
        setLoginError("An error occurred: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="register-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="reg-container">
          <h1>Login to ThomasCook</h1>

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
          {isSubmitting && (
            <div className="spinner">
              {/* Use the FaSpinner component from react-icons */}
              <FaSpinner className="spinner-icon" />
            </div>
          )}
          <div className="error-message">
            {loginError && <p className="error-text">{loginError}</p>}
          </div>

          <div className="clearfix">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
