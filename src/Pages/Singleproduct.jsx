import React from "react";
import Styles from "../styles/SingleProduct.module.css";

function Singleproduct() {
  const { name, img, price, mrp, discount, id } = {
    name: "HP 14s-dr3001TU Laptop (Intel Pentium Silver N6000/8 GB/256 GB SSD/UHD Graphics/Windows 11 Home/MSO/HD), 35.6 cm (14 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-681Y7PA-ACJ-Laptop-493178767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjAxOXxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDU2Lzk5MjM5NDA2MTQxNzQuanBnfGEzZDE5OGQxNmY4M2FkMGUxODU2OTg4MDdkOTFkMmZlYmJmZjdiMDAzZTVhYzBiZmVmNThiMmYwYzhmMTkyNGI",
    price: "32,999.00",
    mrp: "37,000.00",
    discount: "11%(₹4,001)",
    id: 1,
  };

  return (
    <div className={Styles.containar}>
      <div style={{ border: "1px solid red" }}>
        <img width="100%" src={img} alt="product image" />
      </div>
      <div style={{ textAlign: "justify", padding: "5px" }}>
        <p className={Styles.productName}>{`${name.substring(0, 60)}...`}</p>
        <br />
        <div style={{ display: "flex" }}>
          <p>Deal Price: </p>
          <h3> {` ₹${price}`}</h3>
        </div>
        <p>
          M.R.P : <strike>{`₹${mrp}`}</strike>{" "}
        </p>
        <p>You Save : {discount}</p>

        <span className={Styles.Offers}> OFFERS AVAILABLE</span>
      </div>
    </div>
  );
}

export default Singleproduct;
