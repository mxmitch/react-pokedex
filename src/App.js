import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PokemonCard from "./components/PokemonCard";
import "./App.scss";
import axios from "axios";

function App() {
  const [results, setResults] = useState({
    id: "",
    name: "Stats",
    image: "",
    height: "",
    weight: "",
    baseExperience: "",
    abilities: [],
    types: [],
    moves: []
  });

  const handleSubmit = (val) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${val}`)
      .then((res) => {
        console.log(res.data);
        setResults({
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites.other.dream_world.front_default,
          types: res.data.types,
          height: res.data.height,
          weight: res.data.weight,
          abilities: res.data.abilities,
          baseExperience: res.data.base_experience,
          moves: res.data.moves
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <Search handleSubmit={handleSubmit} />
      <PokemonCard
        key={results.id}
        id={results.id}
        name={results.name}
        image={results.image}
        types={results.types}
        height={results.height}
        weight={results.weight}
        abilities={results.abilities}
        baseExperience={results.baseExperience}
        moves={results.moves}
      />
    </div>
  );
}

export default App;
