import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";
class Carousels extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/banner1.jpg'}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/banner2.jpg'}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/banner1.jpg'}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousels;
