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



function HomePage() {
  const history = useHistory();
  const { pokeImage, setPokeImage, getPokeImage, pokemons, setPokemons, getPokemons, pokedex, setPodedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);
    
  
  useEffect(() => {
    getPokemons();
    getPokeImage();
  }, []);

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
              return <CardContainer>
                      <ImgPokemon src= {pokeImage}></ImgPokemon>
                      <div>
                        <TextTitle>{poke.name}</TextTitle>
                      </div>
                      <ButtonContainer>
                        <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
                        <YellowButton onClick={() => goToDetails(history)}>VER DETALHES</YellowButton>
                      </ButtonContainer>
                    </CardContainer> 
            })}
            </BodyContainerList>
        </MainContainer>;
  
}

export default HomePage;
