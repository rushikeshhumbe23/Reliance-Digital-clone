import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick_Style.css";
import { CaroselData1 } from "./CaroselData";
export default class SimpleSlider extends Component {
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
          {CaroselData1.map((ele, i) => (
            <div key={i + 1}>
              <img width="100%" src={ele} alt="carosel images" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
