import React from "react";
import Styles from "./ProductCard.module.css";

function ProductCard({ name, img, price, mrp, discount, id }) {
  name = name.toString();
  name = name.substring(0, 60);

  discount = ((+mrp - +price) / mrp) * 100;

  if (!discount && mrp) {
    discount = `10%(1000)`;
  }
  return (
    <div className={Styles.containar}>
      <div>
        <img width="100%" src={img} alt="product image" />
      </div>
      <div style={{ textAlign: "justify", padding: "5px" }}>
        <p className={Styles.productName}>{`${name}...`}</p>
        <br />
        <div style={{ display: "flex" }}>
          <p className={Styles.para}>Deal Price: </p>
          <h3> {` ₹${price}`}</h3>
        </div>
        <p className={Styles.para}>
          M.R.P : <strike>{mrp ? `₹${mrp}` : `₹${price}`}</strike>
        </p>
        <p className={Styles.para}>
          You Save : {discount ? discount : "0%(00.00)"}
        </p>

        <span className={Styles.Offers}> OFFERS AVAILABLE</span>
      </div>
    </div>
  );
}

export default ProductCard;
