import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const PokemonCard = (props) => {
  return (
    <div>
      <Card className="card" bg="dark">
        {props.data.sprites && (
          <Image
            className="image"
            src={props.data.sprites.other.dream_world.front_default}
          />
        )}
      </Card>
    </div>
  );
};

export default PokemonCard;
