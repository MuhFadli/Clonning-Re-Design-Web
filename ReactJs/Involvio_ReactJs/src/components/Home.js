import React, { Component, Fragment } from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div style={{ backgroundColor: "#000" }}>
          <Body />
        </div>
        <div style={{ marginTop: "2%" }}>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Home;
