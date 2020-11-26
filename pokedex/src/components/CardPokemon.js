import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
    CardContainer,
    ImgPokemon,
    ButtonContainer,
    YellowButton,
    TextTitle,
   } from "../Styled/styled";
 import { goToDetails, goToPokedex } from "./router/Coordinator";
 import GlobalStateContext from "../global/GlobalStateContext";
 import axios from "axios";


function CardPokemon(props) {
  const history = useHistory();
  //const { getPokeImage, pokemons, setPokemons, getPokemons, pokedex, setPodedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);
  const [pokeImage, setPokeImage] = useState([])

  useEffect(() => {
    getPokeImage();
  }, []);

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

  return (
        <CardContainer>
            <ImgPokemon src= {pokeImage}></ImgPokemon>
            <div>
             <TextTitle>{props.name}</TextTitle>
            </div>
            <ButtonContainer>
             <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
             <YellowButton onClick={() => goToDetails(props.name)}>VER DETALHES</YellowButton>
            </ButtonContainer>
        </CardContainer> 
  );
};

export default CardPokemon;