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
    <div className="container .bg-secondary">
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
              src="\assets\cars\bmw5.jpg"
              alt="First slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>bmw car</h5>
              <p>adasdadad</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="\assets\cars\chr.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="\assets\cars\landcruiser.png"
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
