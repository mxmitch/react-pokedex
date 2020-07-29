import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PokemonCard = (props) => {
  return (
    <Row>
      <Col xs={12} sm={6}>
        <Card className="card" bg="dark" className="margin-bottom">
          <Image className="image" src={props.image} />
        </Card>
      </Col>
      <Col xs={12} sm={6}>
        <h2>
          {props.id} {props.name}
        </h2>
      </Col>
    </Row>
  );
};

export default PokemonCard;
