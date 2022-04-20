import React from "react";
import "./index.css";
import flip from "./flipkart.png";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="flipkartText">
        <h1>Flipkart</h1>
        <img src={flip} alt="text" className="img-logo" />
      </div>

        <div className="xyz1">
        <div className="textStyle">Log in for best experience</div>
        <h3 className="phone_text">Enter your Phone number to continue</h3>
        <div className="inputDialCode">
          <div className="dialCode">+91</div>
          <div className="inputWrapper">
            <input
              type="phone"
              placeholder="Phone number"
              className="input-field"
            />
          </div>
        </div>
        <h4 className="email-text">Use Email-Id</h4>
        <div className="textWrapper">
          By continuing you agree to flipkart's
          <span className="text-term" target="_blank" href="flipcart.com">
            Term's of Use
          </span>{" "}
          and{" "}
          <span className="text-term" target="_blank" href="flipcart.com">
            privacy policy
          </span>{" "}
        </div>

        <div className="btn-wrapper">
          <button type="continue" className="wrapper-icon">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
