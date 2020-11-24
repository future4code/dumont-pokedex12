import React, { useEffect, useState } from "react";
import axios from "axios";
import { goToDetails, goToPokedex } from "./router/Coordinator";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

const HomeContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(12, 1fr);
  grid-template-rows:repeat(12, 1fr);
  width:100vw;height:100vh;
  background-color:#FFBF00;
    menu{
        background-color:#0431B4;
        margin-top:0;
        grid-column:1/13;grid-row:1/4;
      }
    .cardPokemon{
      width:15vw;height:10vh;
      background-color:#0431B4;color:red;
      grid-column:1;grid-row:13;
      }
`


function HomePage() {
  const history = useHistory();

  return(
   
      
      <HomeContainer> 
        <menu></menu>
        <div className="cardPokemon">ola</div>
        <div className="cardPokemon">ola</div>
        <div className="cardPokemon">ola</div>
        <div className="cardPokemon">ola</div>
        <div className="cardPokemon">ola</div>
        <div className="cardPokemon">ola</div>
      </HomeContainer>
    
  )
  
}

export default HomePage;
