import React, { Component, Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

import img from "../assets/images/image_vector.svg";
import slide1 from "../assets/images/OrientationKit.svg";
import slide2 from "../assets/images/CampusKit.svg";
import slide3 from "../assets/images/AttendanceKit.svg";
import slide4 from "../assets/images/RetainAI.svg";

class Body extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col sm="6" style={{ marginTop: "10%" }}>
              <img src={img} />
              {/* <img src={require("./assets/images/image_vector.svg")} /> */}
            </Col>
            <Col sm="6" style={{ marginTop: "10%" }}>
              <p
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                  marginBottom: "5%",
                  color: "#fff"
                }}
              >
                The most advanced <br />
                student experience platform.
              </p>
              <p
              //   style={{color: '#fff'}}
              >
                Involvio is designed with your students in mind. Communicate
                with a personal touch, and deliver help and resources where and
                when your students need it.
              </p>
              <Button
                color="info"
                size="lg"
                href="https://www.involvio.com/demo"
              >
                Get a demo
              </Button>
            </Col>
          </Row>

          <div>
            <p
              style={{
                fontSize: 30,
                textAlign: "center",
                margin: "7%",
                color: "#fff"
              }}
            >
              Some of Our Products
            </p>
          </div>

          <div className="bd-example">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                <li data-target="#carouselExampleCaptions" data-slide-to={3} />
              </ol>
              <div className="carousel-inner" style={{ height: "360px" }}>
                <div
                  className="carousel-item active"
                  style={{ height: "100%" }}
                >
                  <img
                    src={slide1}
                    style={{ height: "100%", margin: 0, width: "100%" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "#000" }}>OrientationKit</h5>
                    <p>
                      Start your students out strong with comprehensive
                      onboarding tools.
                    </p>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{ height: "100%", margin: 0, width: "100%" }}
                >
                  <img
                    src={slide3}
                    style={{ height: "100%", margin: 0, width: "100%" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "#000" }}>AttendanceKit</h5>
                    <p>
                      Simple, powerful, and, automated attendance tracking in
                      your LMS.
                    </p>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{ height: "100%", margin: 0, width: "100%" }}
                >
                  <img
                    src={slide2}
                    style={{ height: "100%", margin: 0, width: "100%" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "#000" }}>CampusKit</h5>
                    <p>
                      Promote student and stakeholder involvement in your
                      community.
                    </p>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{ height: "100%", margin: 0, width: "100%" }}
                >
                  <img
                    src={slide4}
                    style={{ height: "100%", margin: 0, width: "100%" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "#000" }}>RetainAI</h5>
                    <p>
                      Drive student success with next generation machine
                      learning, AI, and big data.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Body;
