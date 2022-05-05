import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Projects extends Component {
  render() {
    return (
      <>
        <h1 className="projectHeader">My Projects</h1>
        <Carousel
          className="carousel"
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          width="100%"
        >
          <div>
            <img src="assets/1.png" alt="" />
            <p className="legend">
              Ticketear, A website for purchasing various tickets
            </p>
          </div>
          <div>
            <img src="assets/2.png" alt="" />
            <p className="legend">A pharmacy Drug management System</p>
          </div>
          <div>
            <img src="assets/3.png" alt="" />
            <p className="legend">A static Landing page</p>
          </div>
        </Carousel>
      </>
    );
  }
}

export default Projects;
