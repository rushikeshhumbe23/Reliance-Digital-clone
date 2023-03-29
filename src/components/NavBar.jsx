import styled from "@emotion/styled";
import React from "react";
import Burgar from "./Burgar";
import NavrightList from "./NavrightList";
import logo from "../Images/logo.PNG";
import "../styles/NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function NavBar() {
  const theme = false; // theme context
  const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    display: flex;
    margin: 0px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0 px;
    z-index: 1;
    background-color: #f52a2a;
    color: white;
    }
  `;

  const links = [
    {
      path: "/mobileandtablets",
      text: `MOBILES&TABLETS`,
    },
    { path: "/mobileandtablets", text: "TELEVISIONS" },
    { path: "/mobileandtablets", text: "AUDIO" },
    { path: "/mobileandtablets", text: "HOME APPLIANCES" },
    { path: "/mobileandtablets", text: "COMPUTERS" },
    { path: "/mobileandtablets", text: "CAMERAS" },
    { path: "/mobileandtablets", text: "KITCHEN APPLIANCES" },
    { path: "/mobileandtablets", text: "PERSONAL CARE" },
    { path: "/mobileandtablets", text: "ACCESSORIES" },
  ];

  return (
    <div className="navbar_main">
      <div className="navbar_upper">
        <ul>
          <li>Find a store </li>
          <li>|</li>
          <li>Buying guides</li>
          <li>|</li>
          <li>Contact us</li>
        </ul>
      </div>
      <Nav className="navbar">
        <div className="logo">
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
      </Nav>
      <div className={theme === true ? "navbar_lower_dark" : "navbar_lower"}>
        {links.map((ele) => {
          return (
            <div style={{ display: "flex" }}>
              <Link className="navbar_links" key={ele.path} to={ele.path}>
                {ele.text}
              </Link>
              <KeyboardArrowDownIcon
                style={{ color: "white", cursor: "pointer" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
