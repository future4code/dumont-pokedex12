import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from "react-router-dom";



function HomePage() {
  const history = useHistory();

  const goToPokedexPage = (id) => {
    history.push("/pokedex");
  };

  const goToDetailsPage = (id) => {
    history.push("/detalhes");
  };

  return <div>
  <button onClick={goToPokedexPage}>POKEDEX</button>
  <button onClick={goToDetailsPage}>DETALHES</button>
  </div>;
  
}

export default HomePage;
