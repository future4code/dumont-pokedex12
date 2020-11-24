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
   TitleContainer
  } from "../Styled/styled";
import axios from "axios";
import { goToDetails, goToPokedex } from "./router/Coordinator";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png"



function HomePage() {
  const history = useHistory();

  return <MainContainer>
            <HeaderContainer>
              <LogoContainer>
                <Logo src= {Logomarca}></Logo>
              </LogoContainer>
              <MenuContainer>
                <TextMenu onClick={() => goToPokedex(history)}>POKEDEX</TextMenu>
              </MenuContainer>
            </HeaderContainer>
            <BodyContainerList>
              <CardContainer>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
                <div>
                  <TextTitle>Bulbasur</TextTitle>
                </div>
                <ButtonContainer>
                  <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
                  <YellowButton onClick={() => goToDetails(history)}>VER DETALHES</YellowButton>
                </ButtonContainer>
              </CardContainer>
              <CardContainer>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
                <div>
                  <TextTitle>Bulbasur</TextTitle>
                </div>
                <ButtonContainer>
                  <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
                  <YellowButton onClick={() => goToDetails(history)}>VER DETALHES</YellowButton>
                </ButtonContainer>
              </CardContainer>
              <CardContainer>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
                <div>
                  <TextTitle>Bulbasur</TextTitle>
                </div>
                <ButtonContainer>
                  <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
                  <YellowButton onClick={() => goToDetails(history)}>VER DETALHES</YellowButton>
                </ButtonContainer>
              </CardContainer>
              <CardContainer>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
                <div>
                  <TextTitle>Bulbasur</TextTitle>
                </div>
                <ButtonContainer>
                  <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
                  <YellowButton onClick={() => goToDetails(history)}>VER DETALHES</YellowButton>
                </ButtonContainer>
              </CardContainer>
              <CardContainer>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
                <div>
                  <TextTitle>Bulbasur</TextTitle>
                </div>
                <ButtonContainer>
                  <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
                  <YellowButton onClick={() => goToDetails(history)}>VER DETALHES</YellowButton>
                </ButtonContainer>
              </CardContainer>
              <CardContainer>
                <ImgPokemon src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
                <div>
                  <TextTitle>Bulbasur</TextTitle>
                </div>
                <ButtonContainer>
                  <YellowButton onClick={() => goToPokedex(history)}>ADICIONAR À POKEDEX</YellowButton>
                  <YellowButton onClick={() => goToDetails(history)}>VER DETALHES</YellowButton>
                </ButtonContainer>
              </CardContainer>
            </BodyContainerList>
        </MainContainer>;
  
}

export default HomePage;
