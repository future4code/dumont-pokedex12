import React, { useEffect, useState } from "react";
import { ItemContainer, ItemImage, TextContainer, NameText } from "../Styled/styled";
import axios from "axios";
import { goToDetails, goToPokedex } from "./router/Coordinator";
import { useHistory } from "react-router-dom";



function HomePage() {
  const history = useHistory();

  return <ItemContainer>
  <button onClick={() => goToPokedex(history)}>POKEDEX</button>
  <button onClick={() => goToDetails(history)}>DETALHES</button>
  </ItemContainer>;
  
}

export default HomePage;
