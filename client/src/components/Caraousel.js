import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function Caraousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/download3.jpg"
          alt="First slide"
          height={550}
        />
        <Carousel.Caption>
          <h3>Best clean room</h3>
          <p>100 percent customer satisfaction</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/download1.jpg"
          alt="Second slide"
          height={550}
        />

        <Carousel.Caption>
          <h3>book according to accomodation</h3>
          <p>get 50% off on first booking</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/download2.jpg"
          alt="Third slide"
          height={550}
        />

        <Carousel.Caption>
          <h3>Book Best Hotels</h3>
          <p>
            More than 1.5Lakh customer satisfaction
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caraousel;