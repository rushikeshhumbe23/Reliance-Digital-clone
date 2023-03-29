import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/Slick_Style.css";
import { CaroselData1 } from "../Data/CaroselData";
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
          {CaroselData1.map((ele) => (
            <div>
              <img width="100%" src={ele} alt="carosel images" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
