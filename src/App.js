import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PokemonCard from "./components/PokemonCard";
import Container from "react-bootstrap/Container";
import "./App.scss";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("Pokemon");
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
        <Search handleSubmit={handleSubmit} />
        <PokemonCard key={id} image={image} name={name} id={id} />
      </Container>
    </div>
  );
}

export default App;
