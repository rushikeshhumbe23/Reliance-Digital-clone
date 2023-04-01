import React from "react";
import "../styles/NavrightList.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import { Link } from "react-router-dom";

function NavrightList({ open }) {
  return (
    <ul className="navright_list">
      <li>Select Your Pin Code </li>
      <li>|</li>
      <li>
        <span>
          <ShoppingCartIcon className="cart_icon" />
          cart
        </span>
      </li>
      <li>|</li>
      <li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          <span>
            <Person2Icon /> Login
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default NavrightList;
