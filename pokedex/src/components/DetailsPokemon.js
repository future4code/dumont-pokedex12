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
   TitleContainer,
   ImagesContainer,
   DetailsContainer,
   BlueButton,
   TextDetails,
   StatsContainer,
   TypeContainer
  } from "../Styled/styled";
import axios from "axios";
import { goToDetails, goToPokedex, goToHome } from "./router/Coordinator";
import { useHistory, useParams } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"



function DetailsPokemon() {
  const history = useHistory();
  const pathParams = useParams();
  const pokeName = pathParams.name
  const [pokeImageFront, setPokeImageFront] = useState([])
  const [pokeImageBack, setPokeImageBack] = useState([])
  const [pokeStats, setPokeStats] = useState([])
  const [pokeTypes, setPokeTypes] = useState([])
  const [pokeMoves, setPokeMoves] = useState([])

  let hp = {}
  let attack = {}
  let defense = {}
  let specialAttack = {}
  let specialDefense = {}
  let speed = {}
  

  useEffect(() => {
    getPokeDetails();
  }, []);

  const getPokeDetails = () => {
    axios
  .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

  .then((res) => {
    setPokeImageFront(res.data.sprites.front_default);
    setPokeImageBack(res.data.sprites.back_default);
    setPokeStats(res.data.stats);
    setPokeTypes(res.data.types);
    setPokeMoves(res.data.moves);
    console.log(res.data.moves)

  })
  .catch((err) => {
    console.log(err);
  });
};

for (let index = 0; index < pokeStats.length; index++) {
  hp = pokeStats[0];
  attack = pokeStats[1];
  defense = pokeStats[2];
  specialAttack = pokeStats[3];
  specialDefense = pokeStats[4];
  speed = pokeStats[5];
}


const moveList = pokeMoves.filter((move, index) => {
  if (index < 5) {
    return true
  }
  return false
})



  return <MainContainer>
            <HeaderContainer>
              <LogoContainer>
                <Logo src= {Logomarca}></Logo>
              </LogoContainer>
              <TitleContainer><h1>{pokeName}</h1></TitleContainer>
              <MenuContainer>
              <TextMenu onClick={() => goToHome(history)}>POKEHOME</TextMenu>
                <TextMenu onClick={() => goToPokedex(history)}>POKEDEX</TextMenu>
              </MenuContainer>
            </HeaderContainer>
            <BodyContainerList>
              <ImagesContainer>
                <ImgPokemon src= {pokeImageFront}></ImgPokemon>
                <ImgPokemon src= {pokeImageBack}></ImgPokemon>
              </ImagesContainer>
              <DetailsContainer>
                <TitleContainer>
                  <TextTitle>PODERES</TextTitle>
                </TitleContainer>
                <StatsContainer>
                  <TextDetails>HP: {hp.base_stat} </TextDetails>
                  <TextDetails>Ataque: {attack.base_stat} </TextDetails>
                  <TextDetails>Defesa: {defense.base_stat} </TextDetails>
                  <TextDetails>Ataque Especial: {specialAttack.base_stat} </TextDetails>
                  <TextDetails>Defesa Especial: {specialDefense.base_stat} </TextDetails>
                  <TextDetails>Velocidade: {speed.base_stat} </TextDetails>
                </StatsContainer>
              </DetailsContainer>
              <DetailsContainer>
                <TextTitle>TIPO</TextTitle>
                {pokeTypes.map((type) => {
                  return <TypeContainer>{type.type.name}</TypeContainer>
                })}
                <TextTitle>PRINCIPAIS ATAQUES</TextTitle>
                {moveList.map((move) => {
                  return <TextDetails>{move.move.name}</TextDetails>
                })}
              </DetailsContainer>
              <BlueButton>ADICIONAR À POKEDEX</BlueButton>
            </BodyContainerList>
</MainContainer>;
}

export default DetailsPokemon;
