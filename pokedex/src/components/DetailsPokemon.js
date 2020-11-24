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
   BlueButton
  } from "../Styled/styled";
import axios from "axios";
import { goToDetails, goToPokedex, goToHome } from "./router/Coordinator";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"


function DetailsPokemon() {
  const history = useHistory();

  return <MainContainer>
            <HeaderContainer>
              <LogoContainer>
                <Logo src= {Logomarca}></Logo>
              </LogoContainer>
              <TitleContainer><h1>Bulbasaur</h1></TitleContainer>
              <MenuContainer>
              <TextMenu onClick={() => goToHome(history)}>POKEHOME</TextMenu>
                <TextMenu onClick={() => goToPokedex(history)}>POKEDEX</TextMenu>
              </MenuContainer>
            </HeaderContainer>
            <BodyContainerList>
              <ImagesContainer>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
              </ImagesContainer>
              <DetailsContainer>
                <p>Detalhes</p>
              </DetailsContainer>
              <DetailsContainer>
                <p>Detalhes</p>
              </DetailsContainer>
              <BlueButton>ADICIONAR À POKEDEX</BlueButton>
            </BodyContainerList>
</MainContainer>;
}

export default DetailsPokemon;
