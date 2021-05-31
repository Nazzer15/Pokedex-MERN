import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  var num = 1;

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=30").then((res) => {
      setPokemon(
        res.data.results.map((p) => {
          return {
            name: p.name,
            url: p.url,
            id: num++
          };
        })
      );
    });
  }, []);

  return (
    <div className="">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default PokemonList;
