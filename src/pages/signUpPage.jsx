import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import Logo from "../assets/Logo.png";
import "./signUp.css";

const signUpPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 Logo">
          <img src={Logo} alt="" className="img-fluid" />
          <p>Manage your Money</p>
        </div>
        <div className="col-lg-6 login">
          <form>
            <h1>Sign Up</h1>
            <div className="username">
              <label htmlFor="username">User Name</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="email">
              <label htmlFor="email">Email Id</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="password">
              <label htmlFor="cofirm_password">Confirm Password</label>
              <input type="password" name="confirm_password" id="c_password" />
            </div>
            <div className="conditions">
              <div className="conditions_checkbox">
                <input type="checkbox" name="conditions" id="conditions" />
                <label htmlFor="conditions">I agree to the <span>Terms of service</span> and <span>Privacy Policy</span></label>
              </div>
            </div>
            <input type="submit" value="Sign In" id="signinbutton" />
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
