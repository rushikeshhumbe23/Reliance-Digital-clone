import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick_Style.css";
import { CaroselData2 } from "./CaroselData";
export default class Carosel2 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {CaroselData2.map((ele, i) => (
            <div key={i + 1}>
              <img width="100%" src={ele} alt="carosel images" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
