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
        <img src="http://www.prevention.com/sites/prevention.com/files/images/news/featured_images/citrus-juice-TS-158268808-628.jpg" />
        <img src="http://www.tasteforlife.com/sites/default/files/styles/desktop/public/field/image/detoxjuices.png?itok=oe2Ke9Pg0" />
        <img src="http://www.mediterraneandietforall.com/wp-content/uploads/2014/01/mediterranean-diet-juices.jpg" />
        <img src="https://www.wagamama.us/-/media/WagamamaUSMainsite/hero-pod-images/juices.jpg" />
      </Slider>
    </div>
  );
};

export default Carousel;
