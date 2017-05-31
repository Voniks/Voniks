import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css';

const Carousel = () => {
  return (
    <div id="carousel">
      <Slider draggable={true} slidesToShow={4} adaptiveHeight={true}>
        <img src="https://lh3.googleusercontent.com/nYhPnY2I-e9rpqnid9u9aAODz4C04OycEGxqHG5vxFnA35OGmLMrrUmhM9eaHKJ7liB-=w300" />
      </Slider>
    </div>
  );
};

export default Carousel;
