import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";
import Logo from "../assets/Logo.png";
import "./loginPage.css";

const apiUrl = "http://localhost:5002/api/auth/login";


const loginPage = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset previous error and loading state
    setError("");
    setLoading(true);

    // console.log(formdata);
    // setLoading(false);

    try{
      const response = await axios.post(`${apiUrl}`,formdata,{
        headers:{"Content-Type":"application/json"}
      });
      // Handle successful signup
      console.log("Login successful:", response.data);
      setLoading(false);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      navigate("/home"); // Navigate to home screen
    }catch(error){
      setError("Login failed. Please try again.");
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 Logo">
          <img src={Logo} alt="" className="img-fluid" />
          <p>Manage your Money</p>
        </div>
        <div className="col-lg-6 login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
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
              <label htmlFor="email">Email Id</label>
              <input type="email" name="email" id="email" 
              value={formdata.username}
              onChange={handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" 
              value={formdata.password}
              onChange={handleChange}
              />
            </div>
            <div className="rememberMe">
              <div className="rememberMe_checkbox">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <p>Forgot Password</p>
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
              <input type="submit" value="Log In" id="logininbutton" />
            )}

            {/* Error message display */}
            {error && <div className="text-danger mt-2">{error}</div>}
            <div className="signInOptions">
              <p>
                Don't have an account?{" "}
                <span>
                  <Link to="/signUp">Register</Link>
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

export default loginPage;
