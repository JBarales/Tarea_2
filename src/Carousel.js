import React from 'react';
import { Carousel } from 'react-bootstrap';

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/image1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Curso 1</h3>
          <p>Descripción del curso 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/image1.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Curso 2</h3>
          <p>Descripción del curso 2</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
