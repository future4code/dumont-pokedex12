import React, { useContext } from "react";
import {
  MainContainer,
  HeaderContainer,
  LogoContainer,
  Logo,
  MenuContainer,
  BodyContainerList,
  TextMenu,
  TitleContainer,
} from "../Styled/styled";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"
import GlobalStateContext from "../global/GlobalStateContext";
import CardPokemon from "./CardPokemon";

function Pokedex() {
  const history = useHistory();
  const { setDetailsButton, setTextButton, pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext);

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
    const newListPokemon = [...pokemons, newPokemon]
    setPokemons(newListPokemon)
    const index = pokedex.findIndex((poke) => poke.name === name)
    let newPokedex = [...pokedex]
    newPokedex.splice(index, 1)
    setPokedex(newPokedex)
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
