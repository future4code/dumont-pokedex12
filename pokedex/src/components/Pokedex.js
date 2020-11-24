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
} from "../Styled/styled";
import axios from "axios";
import { goToDetails, goToHome, goBack } from "./router/Coordinator";
import { useHistory } from "react-router-dom";
import Logomarca from "../img/pokemon-logo.png";

function Pokedex() {
  const history = useHistory();

  return (
    <MainContainer>
      <HeaderContainer>
        <LogoContainer>
          <Logo src={Logomarca}></Logo>
        </LogoContainer>
        <MenuContainer>
          {/* <h1>SUA POKEDEX </h1> */}
          <TextMenu onClick={() => goToHome(history)}>POKEHOME</TextMenu>
          <TextMenu onClick={() => goBack(history)}>VOLTAR</TextMenu>
        </MenuContainer>
      </HeaderContainer>
      <BodyContainerList>
        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>

        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>

        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>

        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>
        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>
        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>
        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>
        <CardContainer>
          <ImgPokemon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDs6Vi0XC-iqim86COwaCdEM0Bu-SNdqDLQ&usqp=CAU"></ImgPokemon>
          <div>
            <TextTitle>Bulbasur</TextTitle>
          </div>
          <ButtonContainer>
            <YellowButton>REMOVER POKEMON</YellowButton>
            <YellowButton onClick={() => goToDetails(history)}>
              DETALHES
            </YellowButton>
          </ButtonContainer>
        </CardContainer>
      </BodyContainerList>
    </MainContainer>
  );
}

export default Pokedex;
