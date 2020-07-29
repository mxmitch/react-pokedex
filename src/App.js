import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PokemonCard from "./components/PokemonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.scss";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (val) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${val}`)
      .then((res) => {
        console.log(res.data);
        setImage(res.data.sprites.other.dream_world.front_default);
        setName(res.data.name);
        setId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Search handleSubmit={handleSubmit} />
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <PokemonCard key={id} image={image} name={name} id={id} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
