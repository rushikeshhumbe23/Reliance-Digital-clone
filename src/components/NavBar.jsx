import styled from "@emotion/styled";
import React from "react";
import Burgar from "./Burgar";
import NavrightList from "./NavrightList";
import logo from "../Images/logo.PNG";
import "../styles/NavBar.css";
import { Navigate, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function NavBar() {
  const theme = false; // theme context
  const isAuth = true; //

  const links = [
    {
      path: "/mobileandtablet",
      text: `MOBILES&TABLETS`,
    },
    { path: "/televisions", text: "TELEVISIONS" },
    { path: "/audio", text: "AUDIO" },
    { path: "/homeappliances", text: "HOME APPLIANCES" },
    { path: "/cumputers", text: "COMPUTERS" },
    { path: "/cameras", text: "CAMERAS" },
    { path: "/kitchenappliances", text: "KITCHEN APPLIANCES" },
    { path: "/personalcare", text: "PERSONAL CARE" },
    { path: "/accessories", text: "ACCESSORIES" },
  ];

  const navigate = useNavigate();

  return (
    <div className="navbar_main">
      <div className="navbar_upper">
        <div
          style={{
            fontSize: "20px",
            paddingLeft: "50px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            fontWeight: "500",
            letterSpacing: "-0.5px",
          }}
        >
          <div
            style={{
              border: "1px solid",
              padding: "5px 10px",
              borderRadius: "10px",
              backgroundColor: "inherite",
            }}
          >
            {isAuth ? `Hi Rushikesh Humbe 👋` : "Please Login"}
          </div>
        </div>
        <div>
          <ul>
            <li>Find a store </li>
            <li>|</li>
            <li>Buying guides</li>
            <li>|</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Infinite Digitals Logo Image" />
        </div>
        <div className="input_container">
          <input
            className="navbar_input"
            type="text"
            placeholder="Find your favorite products"
          />
          <button className="search_button">
            <SearchIcon className="search_icon" />
          </button>
        </div>

        <NavrightList />
        <Burgar />
      </div>
      <div className={theme === true ? "navbar_lower_dark" : "navbar_lower"}>
        {links.map((ele, i) => {
          return (
            <NavLink
              key={i + 1}
              to={ele.path}
              style={({ isActive }) => {
                return isActive
                  ? { textDecoration: "none", backgroundColor: "#f52a2a" }
                  : { textDecoration: "none", color: "blue" };
              }}
            >
              <div className="navbar_links" key={i + 1}>
                <p>{ele.text}</p>
                <KeyboardArrowDownIcon
                  style={{ color: "white", cursor: "pointer" }}
                />
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;

/*


*/
