import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";
import Logo from "../assets/Logo.png";
import "./signUp.css";

const signUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset previous error and loading state
    setError("");
    setLoading(true);

    const { username, email, password, confirmPassword, agreeTerms } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    if (!agreeTerms) {
      setError("Please agree to the terms.");
      setLoading(false);
      return;
    }

    try {
      const apiUrl = "http://localhost:5002/api/auth/signup";
      const response = await axios.post(`${apiUrl}`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      // Handle successful signup
      console.log("Signup successful:", response.data);
      setLoading(false);
      navigate("/home"); // Navigate to home screen
    } catch (error) {
      setError("Signup failed. Please try again later.");
      console.error("Error:", error);
      setLoading(false);
    }
  };

  // console.log(formData);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 Logo">
          <img src={Logo} alt="" className="img-fluid" />
          <p>Manage your Money</p>
        </div>
        <div className="col-lg-6 login">
          <form onSubmit={handleSignUp}>
            <h1>Sign Up</h1>
            {/* Bootstrap Toast for displaying errors */}
            <div
              className={`toast align-items-center text-white bg-danger position-fixed bottom-0 end-0 m-3 ${
                error ? "show" : ""
              }`}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              style={{ zIndex: 9999 }}
            >
              <div className="d-flex">
                <div className="toast-body">{error}</div>
                <button
                  type="button"
                  className="btn-close me-2 m-auto"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={() => setError("")}
                ></button>
              </div>
            </div>
            <div className="username">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email Id</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm_password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="conditions">
              <div className="conditions_checkbox">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="conditions"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <label htmlFor="conditions">
                  I agree to the <span>Terms of service</span> and{" "}
                  <span>Privacy Policy</span>
                </label>
              </div>
            </div>
            {loading ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            ) : (
              <input type="submit" value="Sign In" id="signinbutton" />
            )}

            {/* Error message display */}
            {error && <div className="text-danger mt-2">{error}</div>}
            <div className="LogInOptions">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Log In</Link>
                </span>
              </p>
            </div>
            <div className="signInwithGoogle">
              <button>
                <GoogleIcon />
                <span>Log in with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signUpPage;
