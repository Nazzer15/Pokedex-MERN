import React from "react";

import "./SideBar.css";
import PokemonList from "../pokemon/PokemonList";

function SideBar() {
  return (
    <div className="col-md-5 col-xl-3 bd-sidebar sidebar">
      <ul className="navbar-nav navbar-nav-lg nav-tabs">
        <PokemonList />
      </ul>
    </div>
  );
}

export default SideBar;
