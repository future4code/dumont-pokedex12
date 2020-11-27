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
//import { goToDetails } from "./router/Coordinator";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"
import GlobalStateContext from "../global/GlobalStateContext";
import CardPokemon from "./CardPokemon";



function HomePage() {
  const history = useHistory();
  const { textButton, setTextButton, buttonPokedex, setButtonPokedex, pokemons, setPokemons, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);
  
  
/*   useEffect(() => {
    buttonPokedex ? setTextButton("ADICIONAR DA POKEDEX") : setTextButton("REMOVER DA POKEDEX")
  }, []); */
  
  const goToPokedex = () => {
    setTextButton("REMOVER DA POKEDEX")
    history.push("/pokedex");
  };

  const addPokedex = (name, url) => {
    const newPokemon = {name, url}
    const newPokedex = [...pokedex, newPokemon]
    setPokedex(newPokedex)
    alert("Pokemon adicionado com sucesso!")
    const ListPokemon = pokemons.filter((pokemon) => {
      if (pokemon.name !== name) {
        return true
      }
        return false
      })
    setPokemons(ListPokemon)
  }
  

  return <MainContainer>
            <HeaderContainer>
              <LogoContainer>
                <Logo src= {Logomarca}></Logo>
              </LogoContainer>
              <MenuContainer>
                <TextMenu onClick={() => goToPokedex()}>POKEDEX</TextMenu>
              </MenuContainer>
            </HeaderContainer>
            <BodyContainerList>
            {pokemons.map((poke) => {
              return <CardPokemon function={addPokedex} pokedex={false} name={poke.name} url={poke.url} />
            })}
            </BodyContainerList>
        </MainContainer>;
  
}

export default HomePage;
