import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-handlebars");

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();

    // //mail step1
    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   secure: false,

    //   auth: {
    //     user: "cloudsensorplatform@gmail.com",
    //     pass: "alertmanagement",
    //   },
    //   tls: {
    //     rejectUnauthorized: false,
    //   },
    // });
    // //mail step 2

    // transporter.use(
    //   "compile",
    //   hbs({
    //     viewEngine: {
    //       extname: ".handlebars",
    //       layoutsDir: "./views/",
    //       defaultLayout: "index",
    //     },
    //     viewPath: "./views/",
    //   })
    // );

    // let mailOptions = {
    //   from: "cloudsensorplatform@gmail.com",
    //   to: this.state.email,
    //   subject: "Customer Feedback",
    //   // text: "Welcome!",
    //   template: "index",
    //   context: {
    //     firstname: this.state.firstname,
    //     lastname: this.state.lastname,
    //     telnum: this.state.telnum,
    //     email: this.state.email,
    //     agree: this.state.agree,
    //     contactType: this.state.contactType,
    //     message: this.state.message,
    //   },
    // };

    // //step 3
    // transporter.sendMail(mailOptions, (err, data) => {
    //   if (err) {
    //     console.log("Error occurs", err);
    //   } else {
    //     console.log("Email Sent");
    //   }
    // });
  }

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div>
            <div className="col-12">
              <h3>Business Hours</h3>
              <br />
              Mon : 9:00am - 6:00pm
              {/* Mon - Sat : 9:00am - 6:00pm */}
              <br />
              Tue &nbsp;: 9:00am - 6:00pm
              <br />
              Wed : 9:00am - 6:00pm
              <br />
              Thu &nbsp;: 9:00am - 6:00pm
              <br />
              Fri &nbsp;&nbsp;&nbsp;: 9:00am - 6:00pm
              <br />
              Sat &nbsp;&nbsp;: 9:00am - 6:00pm
              <br />
              Sun &nbsp;: Closed
              {/* Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Closed */}
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              155/A, Yakkala Road
              <br />
              Gampaha
              <br />
              Sri Lanka
              <br />
              <i className="fa fa-phone"></i>: &nbsp;+94 77 767 3638
              <br />
              <i className="fa fa-fax"></i>: +94 33 222 3596
              <br />
              <i className="fa fa-envelope"></i>:
              <a href="mailto:sarinmotors@gmail.com"> sarinmotors@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <a
              href="https://www.google.com/maps/place/15+Yakkala+Rd,+Gampaha/@7.0925488,79.9978777,16.33z/data=!4m5!3m4!1s0x3ae2fb8cd7fb4ca5:0x6c9a3356848be7e4!8m2!3d7.0930667!4d80.0004011"
              target="_blank"
            >
              <h5>Map of our Location</h5>
            </a>
            <Map
              google={this.props.google}
              initialCenter={{
                lat: 7.093444734076279,
                lng: 80.00039875458239,
              }}
              zoom={14}
              style={{ width: "500px", height: "300px", marginTop: "-5px" }}
            >
              <Marker onClick={this.onMarkerClick} name={"Current location"} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+94777673638"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a
                role="button"
                className="btn btn-info"
                style={{ color: "#fff" }}
              >
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:sarinmotors@gmail.com"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row row-content" style={{ marginTop: "50px" }}>
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. number"
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>Contact Me</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Phone</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Contact;
export default GoogleApiWrapper({
  apiKey: "AIzaSyBdm1ULA65YOie4-8-MQ4aRBNpo5ny-zd0",
})(Contact);
