import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const PokemonCard = (props) => {
  return (
    <div>
      <Card className="card" bg="dark" className="margin-bottom">
        <Image className="image" src={props.image} />
      </Card>
      <h2>
        {props.id} {props.name}
      </h2>
    </div>
  );
};

export default PokemonCard;
