import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../images/react.jpg'
import brand2 from '../../images/js.jpg'
import brand3 from '../../images/node.jpg'

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default BrandCarousel;