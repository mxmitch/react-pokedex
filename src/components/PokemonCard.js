import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PokemonCard = (props) => {
  const abilities = props.abilities.map((ability) => {
    return <span>{ability.ability.name} </span>;
  });

  const types = props.types.map((type) => {
    return <span>{type.type.name} </span>;
  });

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <Card className="card" bg="dark" className="margin-bottom">
            <Image className="image" src={props.image} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <h2>
            {"#" + props.id}{" "}
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          </h2>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>
              <b>Type(s):</b> {types}
            </li>
            <li>
              <b>Height:</b> {props.height}
            </li>
            <li>
              <b>Weight:</b> {props.weight}
            </li>
            <li>
              <b>Base Experience: </b>
              {props.baseExperience}
            </li>
            <li>
              <b>Abilities: </b> {abilities}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PokemonCard;
