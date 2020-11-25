import React, { useEffect, useState } from "react";
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



function HomePage() {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  
  
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/",
      )
      .then((res) => {
        setPokemons(res.data.results);
        console.log(pokemons)
        console.log(res.data.results)
  
      })
      .catch((err) => {
        console.log(err);
      });
  };



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
                      <ImgPokemon src= "https://pokeapi.co/api/v2/pokemon/5/"></ImgPokemon>
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
