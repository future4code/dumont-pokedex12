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
  TitleContainer,
} from "../Styled/styled";
import axios from "axios";
import { goToDetails, goToHome, goBack } from "./router/Coordinator";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"
import GlobalStateContext from "../global/GlobalStateContext";
import CardPokemon from "./CardPokemon";

function Pokedex() {
  const history = useHistory();
  const { setDetailsButton, textButton, setTextButton, buttonPokedex, setButtonPokedex, pokemons, setPokemons, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);


  const goToHome = () => {
    setTextButton("ADICIONAR À POKEDEX")
    history.push("/");
  };

  const goBack = () => {
    setTextButton("ADICIONAR À POKEDEX")
    history.goBack();
  };

  const removePokedex = (name, url) => {
    const newPokemon = {name, url}
    console.log("Newpokemon:", newPokemon)
    const newListPokemon = [...pokemons, newPokemon]
    setPokemons(newListPokemon)
    console.log("Newlistpokemon:",newListPokemon)
    const index = pokedex.findIndex((poke) => poke.name === name)
    console.log("indice:", index)
    let newPokedex = [...pokedex]
    console.log("newpokedex:",newPokedex)
    newPokedex.splice(index, 1)
    console.log("newpokedex splice:",newPokedex)
    setPokedex(newPokedex)
    console.log("pokedex:",pokedex)
    alert("Pokemon Removido!")
    pokedex ? setDetailsButton("REMOVER DA POKEDEX") : setDetailsButton("ADICIONAR À POKEDEX")
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <LogoContainer>
          <Logo src={Logomarca}></Logo>
        </LogoContainer>
        <TitleContainer>
            <h1>SUA POKEDEX </h1>
        </TitleContainer>
        <MenuContainer>
          <TextMenu onClick={() => goToHome(history)}>POKEHOME</TextMenu>
          <TextMenu onClick={() => goBack(history)}>VOLTAR</TextMenu>
        </MenuContainer>
      </HeaderContainer>
      <BodyContainerList>
      {pokedex.map((poke) => {
              return <CardPokemon function={removePokedex} pokedex={true} name={poke.name} url={poke.url} />
            })}
      </BodyContainerList>
    </MainContainer>
  );
}

export default Pokedex;
