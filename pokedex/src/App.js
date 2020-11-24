import React from "react";
import HomePage from "./components/HomePage";
import DetailsPokemon from "./components/DetailsPokemon";
import Pokedex from "./components/Pokedex";
import Router from "../src/components/router/Router";
import GlobalStyled from './components/globalStyled'

function App() {
  return (
    <div>
      <GlobalStyled/>
      <HomePage/>
    </div>
  );
}

export default App;
