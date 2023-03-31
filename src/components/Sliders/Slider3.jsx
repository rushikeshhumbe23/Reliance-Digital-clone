import React, { Component } from "react";
import { Slider3Data } from "./SlidersData";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const st = {
  textAlign: "justify",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#d9dcd9d9",
  padding: "2px 4%",
  fontSize: "20px",
  fontWeight: "400",
};

export default class Slider3 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <div style={st}>
          <p>Explore Tablets Here</p>
          <button
            style={{
              padding: "5px 10px",
              marginLeft: "10px",
              border: "none",
              zIndex: 10,
              backgroundColor: " #0f287b",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            View all
          </button>
        </div>

        <div>
          <Slider {...settings}>
            {Slider3Data.map((ele, i) => (
              <ProductCard key={ele.id} {...ele} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
