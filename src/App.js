import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PokemonCard from "./components/PokemonCard";
import Container from "react-bootstrap/Container";
import "./App.scss";
import axios from "axios";

function App() {
  const [results, setResults] = useState({});

  const handleSubmit = (val) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${val}`)
      .then((res) => {
        console.log(res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <Container fluid>
        <Search handleSubmit={handleSubmit} />
        <PokemonCard data={results} />
      </Container>
    </div>
  );
}

export default App;
