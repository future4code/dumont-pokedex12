import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
    CardContainer,
    ImgPokemon,
    ButtonContainer,
    YellowButton,
    TextTitle,
   } from "../Styled/styled";
 import GlobalStateContext from "../global/GlobalStateContext";
 import axios from "axios";

function CardPokemon(props) {
  const history = useHistory();
  const { setDetailsButton, textButton, pokemons } = useContext(GlobalStateContext);
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

const goToDetails = (name, url, pokedex) => {
  pokedex ? setDetailsButton("REMOVER DA POKEDEX") : setDetailsButton("ADICIONAR À POKEDEX")
  history.push(`/detalhes/${name}`);
};

  return (
        <CardContainer>
            <ImgPokemon src= {pokeImage}></ImgPokemon>
            <div>
             <TextTitle>{props.name}</TextTitle>
            </div>
            <ButtonContainer>
             <YellowButton onClick={() => props.function(props.name, props.url)}>{textButton}</YellowButton>
             <YellowButton onClick={() => goToDetails(props.name, props.url, props.pokedex)}>VER DETALHES</YellowButton>
            </ButtonContainer>
        </CardContainer> 
  );
};

export default CardPokemon;