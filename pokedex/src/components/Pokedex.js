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
  const { textButton, setTextButton, buttonPokedex, setButtonPokedex, pokemons, setPokemons, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);


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
    //const newPokedex = [...pokedex, newPokemon]
    const index = pokedex.findIndex((poke) => poke.name === name)
    setPokedex(pokedex.splice(index, 1))
    console.log(pokedex)
    //setPokemons(ListPokemon) */
    alert("Pokemon Removido!")
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
