import React, { useState } from "react";

import "./PokemonCard.css";
import logo from "../../logo.svg";

function PokemonCard({ pokemon }) {

  return (
    <div>
      {pokemon.map((p) => (
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 text-center">
                <img className="img-thumbnail" src='https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png?raw=true' alt="Logo" />
              </div>
              <div className="col-md-5 text-center">
                <h5 key={p.name} className="pokemon-name">{p.name} </h5>
              </div>
              <div className="col-md-3 text-center">
                <p className="pokemon-number">#001</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonCard;
