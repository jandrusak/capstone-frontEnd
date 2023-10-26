import React from "react";
import Users from "../Users";
import { useSelector } from "react-redux";
// import { CardContent, CardActions, Divider } from "@mui/material";
import { Link } from "react-router-dom";
// import { Card } from "@mui/material";
import logo from "./pinkLogo.png";
import "./Home.css";
import founder from "./founderFar.jpg"
import stock1 from "./whiteboots.webp"
import stock2 from "./pursesPhoto.webp"


const Home = (props) => {
  return (
    <div className="parent-container">
      <div className="over-container">
        <div className="left-container">
        <img src={founder} alt="FounderP" className="founder-photo" />
          <h3>Founder</h3>
          <p className="founder-text">Howdy Austin! Welcome to my store. Take a look at the products page and add something to your cart. If you have any questions, don't hesitate to reach out. I have been running my business for nearly 5 years so can guarantee your satisfaction.</p>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Pink Logo" className="logo-photo" />
        </div>
        <div className="right-container">
        <img src={stock1} alt="display-photo" className="display-photo" />
        <img src={stock2} alt="display-photo" className="display-photo" />
        </div>
      </div>
      <div className="under-container">
          <a href="/products">See Products</a>
      </div>
    </div>
  );
};

export default Home;
