import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { Col, Container, Row } from "react-bootstrap";

import giphy from "../assets/images/giphy.gif";
import shopnow from "../assets/images/shopnow.gif";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <Row>
      <MainNavbar />
      <Col>
        <div className="home">
          <div className="col-md-6">
            <h1>
              <i style={{ color: "green" }}>Shopping-Cart</i>
            </h1>
            <br />

            <b>``Happiness is not in money,but in shopping.``</b>

            <b>Click on 'Shop Now' and start your shopping journey with us.</b>

            <Link to={"/allproducts"}>
              <img className="show" src={shopnow} alt="Second slide" />
            </Link>
          </div>
        </div>
      </Col>
      <Col>
        <img className="d-block w-100" src={giphy} alt="Second slide" />
      </Col>
      <br></br>
      {/* <Footer /> */}
    </Row>
  );
}

export default Home;
