import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick_Style.css";
import { CaroselAllData } from "./CaroselData";
import style from "./CaroselAll.module.css";

export default class CaroselAll extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };

    return (
      <div style={{ backgroundColor: "#fafafa", padding: "15px" }}>
        <p className={style.heading_to_nearfoot}>
          EXPLORE OUR RANGE OF PRODUCTS
        </p>
        <Slider {...settings}>
          {CaroselAllData.map((ele, i) => (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              key={i + 1}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  className={style.nearfoot}
                  src={ele.img}
                  alt="carosel images"
                />
              </div>
              <p className={style.pname}>{ele.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
