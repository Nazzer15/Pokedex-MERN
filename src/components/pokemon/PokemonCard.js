import React from "react";

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
                <img className="img-thumbnail" src={logo} alt="Logo" />
              </div>
              <div className="col-md-4 text-center">
                <h5 key={p} className="pokemon-name">{p}</h5>
              </div>
              <div className="col-md-4 text-center">
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
