import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="">
      <PokemonCard pokemon={pokemon}/>
    </div>
  );
}

export default PokemonList;
