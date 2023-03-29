import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";

function VerticalNav({ open }) {
  return (
    <div
      className="vertical_Nav"
      style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
    >
      <ul>
        <li>Select Your Pin Code</li>
        <li>
          <span>
            <ShoppingCartIcon className="cart_icon" />
            cart
          </span>
        </li>
        <li>
          <span>
            <Person2Icon /> Login
          </span>
        </li>
      </ul>
    </div>
  );
}

export default VerticalNav;
