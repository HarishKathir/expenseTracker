import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import Logo from "../assets/Logo.png";
import "./loginPage.css";

const loginPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 Logo">
          <img src={Logo} alt="" className="img-fluid" />
          <p>Manage your Money</p>
        </div>
        <div className="col-lg-6 login">
          <form>
            <h1>Login</h1>
            <div className="username">
              <label htmlFor="username">User Name</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="rememberMe">
              <div className="rememberMe_checkbox">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <p>Forgot Password</p>
            </div>
            <input type="submit" value="Log In" id="logininbutton" />
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
