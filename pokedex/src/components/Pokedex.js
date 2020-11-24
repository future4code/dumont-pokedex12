import React from "react";
import { goToDetails, goToPokedex } from "./router/Coordinator";
import { useHistory } from "react-router-dom";

function Pokedex() {
  const history = useHistory();

  return <div>PAGINA MINHA POKEDEX</div>;
}

export default Pokedex;
