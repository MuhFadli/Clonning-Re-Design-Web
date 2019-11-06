import React, { Component, Fragment } from 'react'

class Footer extends Component {
    render() {
        return (
          <div style={{ backgroundColor: "#fff" }}>
            <div className="container-fluid">
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <a
                      className="a"
                      href="https://www.involvio.com/careers"
                      style={{ margin: 20, color: "#17a2b8" }}
                    >
                      Careers
                    </a>
                    <a
                      className="a"
                      href="#"
                      style={{ margin: "8%", color: "#17a2b8" }}
                    >
                      Privacy
                    </a>
                    <a
                      className="a"
                      href="#"
                      style={{ margin: 20, color: "#17a2b8" }}
                    >
                      Terms
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ width: '"100%"', margin: 0, marginTop: "2%" }} />
            <div
              className="container-fluid"
              style={{ backgroundColor: "#343a40!important", padding: "2% 0" }}
            >
              <div className="container" style={{ marginTop: "3ex" }}>
                <p className="p">
                  {" "}
                  © 2019 Involvio, LLC. Involvio and the Clockpin Logo are
                  registered trademarks of Involvio LLC.{" "}
                </p>
                <p className="p">
                  {" "}
                  Google, the Google logo, Android, the Android logo, Google
                  Play, and the Google Play logo are trademarks of Google Inc.{" "}
                </p>
                <p className="p">
                  {" "}
                  Apple, the Apple logo, iPhone, and iPod touch are trademarks
                  of Apple Inc., registered in the U.S. and other countries.
                  Apple Watch is a trademark of Apple Inc. App Store is a
                  service mark of Apple Inc.{" "}
                </p>
                <p className="p">
                  {" "}
                  Cisco, the Cisco logo, WebEx, Aironet and Meraki, are
                  trademarks of Cisco Technology Inc.{" "}
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;