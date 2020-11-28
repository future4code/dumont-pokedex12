import React, { useContext } from "react";
import {
   MainContainer,
   HeaderContainer,
   LogoContainer,
   Logo,
   MenuContainer,
   BodyContainerList,
   TextMenu,
  } from "../Styled/styled";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"
import GlobalStateContext from "../global/GlobalStateContext";
import CardPokemon from "./CardPokemon";

function HomePage() {
  const history = useHistory();
  const { setDetailsButton, setTextButton, pokemons, setPokemons, pokedex, setPokedex, } = useContext(GlobalStateContext);
  
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
    pokedex ? setDetailsButton("REMOVER DA POKEDEX") : setDetailsButton("ADICIONAR À POKEDEX")
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
