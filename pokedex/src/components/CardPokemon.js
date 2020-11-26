import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
    CardContainer,
    ImgPokemon,
    ButtonContainer,
    YellowButton,
    TextTitle,
   } from "../Styled/styled";
 //import { goToDetails, goToPokedex } from "./router/Coordinator";
 import GlobalStateContext from "../global/GlobalStateContext";
 import axios from "axios";


function CardPokemon(props) {
  const history = useHistory();
  const { buttonPokedex, setButtonPokedex, pokemons, setPokemons, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);
  const [pokeImage, setPokeImage] = useState([])

  useEffect(() => {
    getPokeImage();
  }, [pokemons]);

  const getPokeImage = () => {
    axios
  .get(props.url)

  .then((res) => {
    setPokeImage(res.data.sprites.front_default);
  })
  .catch((err) => {
    console.log(err);
  });
};

const goToDetails = (name) => {
  history.push(`/detalhes/${name}`);
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

  
  return (
        <CardContainer>
            <ImgPokemon src= {pokeImage}></ImgPokemon>
            <div>
             <TextTitle>{props.name}</TextTitle>
            </div>
            <ButtonContainer>
             <YellowButton onClick={() => addPokedex(props.name, props.url)}>{buttonPokedex}`</YellowButton>
             <YellowButton onClick={() => goToDetails(props.name)}>VER DETALHES</YellowButton>
            </ButtonContainer>
        </CardContainer> 
  );
};

export default CardPokemon;