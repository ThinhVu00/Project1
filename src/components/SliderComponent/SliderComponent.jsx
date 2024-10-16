import Slider from "react-slick";
import React from "react";
import { Image } from "antd";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <Image
            src={image}
            alt="slider"
            preview={false}
            width="100%"
            height="350px"
          />
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
