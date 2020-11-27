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
  const { textButton, setTextButton, buttonPokedex, setButtonPokedex, pokemons, setPokemons, getPokemons, pokedex, setPodedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);

/*   useEffect(() => {
    buttonPokedex ? setTextButton("ADICIONAR DA POKEDEX") : setTextButton("REMOVER DA POKEDEX")
  }, []); */

  const goToHome = () => {
    setTextButton("ADICIONAR À POKEDEX")
    history.push("/");
  };

  const goBack = () => {
    setTextButton("ADICIONAR À POKEDEX")
    history.goBack();
  };

  const removePokedex = (name, url) => {
    /*   const newPokemon = {name, url}
      //const newPokedex = [...pokedex, newPokemon]
      setPokedex(pokedex.splice(newPokemon))
      alert("Pokemon adicionado com sucesso!")
      const ListPokemon = pokemons.filter((pokemon) => {
        if (pokemon.name !== name) {
          return true
        }
          return false
        })
      setPokemons(ListPokemon) */
      alert("Removido!")
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
