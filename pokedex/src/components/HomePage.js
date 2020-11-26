import React, { useEffect, useState, useContext } from "react";
import {
   MainContainer,
   HeaderContainer,
   LogoContainer,
   Logo,
   MenuContainer,
   BodyContainerList,
   CardContainer,
   ImgPokemon,
   ButtonContainer,
   TextMenu,
   YellowButton,
   TextTitle,
  } from "../Styled/styled";
import axios from "axios";
import { goToDetails, goToPokedex } from "./router/Coordinator";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"
import GlobalStateContext from "../global/GlobalStateContext";
import CardPokemon from "./CardPokemon";



function HomePage() {
  const history = useHistory();
  const { buttonPokedex, setButtonPokedex, pokemons, setPokemons, getPokemons, pokedex, setPodedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);
    
  return <MainContainer>
            <HeaderContainer>
              <LogoContainer>
                <Logo src= {Logomarca}></Logo>
              </LogoContainer>
              <MenuContainer>
                <TextMenu onClick={() => goToPokedex(history)}>POKEDEX</TextMenu>
              </MenuContainer>
            </HeaderContainer>
            <BodyContainerList>
            {pokemons.map((poke) => {
              return <CardPokemon name={poke.name} url={poke.url} />
            })}
            </BodyContainerList>
        </MainContainer>;
  
}

export default HomePage;
