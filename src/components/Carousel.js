import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.css";

const Carousel = () => {
  return (
    <div id="carousel">
      <Slider
        infinite={false}
        draggable={true}
        slidesToShow={4}
        adaptiveHeight={true}
      >
        <div className="carousel-img-container">
          <img src="http://www.prevention.com/sites/prevention.com/files/images/news/featured_images/citrus-juice-TS-158268808-628.jpg" />
        </div>
        <div className="carousel-img-container">
          <img src="http://www.tasteforlife.com/sites/default/files/styles/desktop/public/field/image/detoxjuices.png?itok=oe2Ke9Pg0" />
        </div>
        <div className="carousel-img-container">
          <img src="http://www.mediterraneandietforall.com/wp-content/uploads/2014/01/mediterranean-diet-juices.jpg" />
        </div>
        <div className="carousel-img-container">
          <img src="https://www.wagamama.us/-/media/WagamamaUSMainsite/hero-pod-images/juices.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
