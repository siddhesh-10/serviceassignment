import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
function Showservice(props) {
  const [isFlipped, changeFlip] = useState(true);
  const handleClick = (e) => {
    changeFlip(!isFlipped);
  };
  return (
    <Col sm="auto">
      <Card
        bg="dark"
        variant="outlined"
        text="white"
        style={{ width: "15rem" }}
      >
        <Card.Body>
          {isFlipped ? (
            <>
              <Card.Title onClick={handleClick}>{props.title}</Card.Title>
              <Button variant="primary" onClick={handleClick}>
                show
              </Button>
            </>
          ) : (
            <Card.Text onClick={handleClick}>{props.content}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Showservice;
