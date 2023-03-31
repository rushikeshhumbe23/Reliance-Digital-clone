import React from "react";
import "../styles/Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer_main">
      <div className="footer_main_up">
        <div className="footer_main_lists">
          <ul>
            <li>
              <h3>PRODUCT CATEGORIES</h3>
            </li>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>DSLR Cameras</li>
            <li>Televisions</li>
            <li>Air Conditioners</li>
            <li>Refrigerators</li>
            <li>Kitchen Appliances</li>
            <li>Accessories</li>
            <li>Personal Care & Grooming</li>
          </ul>
        </div>

        <div className="footer_main_lists">
          <ul>
            <li>
              <h3>SITE INFO</h3>
            </li>
            <li>About Infinite Digitals</li>
            <li>resQ Services</li>
            <li>Site Map </li>

            <li>Gift Cards</li>
            <li>Corporate Enquires</li>
            <li>Accessories</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer_main_lists">
          <ul>
            <li>
              <h3>RESOURCE CENTRE</h3>
            </li>
            <li>Product Reviews</li>
            <li>Buying Guides</li>
            <li>How Tos</li>
            <li>Featured Stories</li>
            <li>Events & Happenings</li>
            <li>Nearest Store</li>
          </ul>
        </div>

        <div className="footer_main_lists">
          <ul>
            <li>
              <h3>POLICIES</h3>
            </li>
            <li>Terms of Use</li>
            <li>FAQs</li>
            <li></li>
            <li>Cancellation and Return Policy</li>
            <li>Pricing and Payments Policy</li>
            <li>Shipping and Delivery Policy</li>
            <li>Privacy Policy</li>
            <li>E-waste Recycling Policy</li>
            <li>EMI and Additional Cashback T&C</li>
            <li>Our Loyalty Program T&C</li>
            <li>Caution Notice</li>
          </ul>
        </div>
      </div>
      <div className="footer_main_down">
        <div className="footer_social_handles">
          <h4>FOLLOW US</h4>
          <div>
            <FacebookIcon className="social_icons" />
            <TwitterIcon className="social_icons" />
            <YouTubeIcon className="social_icons" />
          </div>
        </div>
        <div>
          <h4>EXPERIENCE INFINITE DIGITALS APP ON MOBILE</h4>
          <div>
            <img
              style={{ margin: "0px 15px" }}
              width="150px"
              src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              alt=""
            />
            <img
              width="150px"
              src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer_main_down2">
        <div
          style={{
            textAlign: "center",
            color: "white",
            textDecoration: "underline",
            width: "100%",
            paddingTop: "10px",
          }}
        >
          <p>Disclaimer</p>
        </div>
        <p className="diclaimer">
          Product prices, offers and availability are subject to change from
          time to time. All prices are inclusive of taxes. Product colours &
          images are only for illustration and they may not exactly match with
          the actual
          <br /> product. Product specs are subject to change & may vary from
          actual product. While every care is taken to avoid inaccuracies in
          content, these are provided as is, without warranty of any kind.
        </p>
        <hr style={{ height: "0.1px", color: "red" }} />
        <p style={{ color: "white", fontSize: "12px", paddingBottom: "10px" }}>
          ❤️ 2023 Infinite Digitals. All Rights Reserved ❤️
        </p>
      </div>
    </div>
  );
}

export default Footer;
