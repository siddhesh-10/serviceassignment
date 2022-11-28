import React, { useState } from "react";
import services from "../components/Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Showservice from "../components/Showservice";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
function Service() {
  var types = ["Education", "IT", "ALL"];
  const [data, changeData] = useState(services);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Services we offer</Navbar.Brand>

          <Nav className="me-auto">
            <NavDropdown title="sort by" id="basic-nav-dropdown">
              {types.map((props, index) => {
                return (
                  <NavDropdown.Item
                    onClick={function () {
                      const newData = services.filter((e) => {
                        if (e.type == props) return e;
                      });
                      if (props == "ALL") {
                        changeData(services);
                      } else changeData(newData);
                    }}
                  >
                    {props}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ justifyContent: "center" }}>
        <Row
          xs="auto"
          sm={4}
          className="g-2"
          style={{ justifyContent: "center" }}
        >
          {data.map((props, index) => {
            return (
              <Showservice
                title={props.title}
                content={props.content}
                id={index}
              />
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Service;
