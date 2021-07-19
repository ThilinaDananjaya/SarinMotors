import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="slider .bg-secondary">
      {/* adding a slider */}

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="\assets\cars\Honda-CR-V-TPMS.png"
              alt="First slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Name</h5> */}
              {/* <p>Description</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="\assets\cars\YTB800-2-902x675.jpg"
              height="400"
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="\assets\cars\71eXBBYjImL._AC_SY450_.jpg"
              height="350"
              alt="Third slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
