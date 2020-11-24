import styled from "styled-components";
import { DarkBlue } from "../Styled/colors";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  overflow-x: hidden;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-row: 1 / 2;
  grid-template-rows: 1fr 2fr 1fr;
  width: 100vw;
  //height: 20vh;
  margin: 0px;
  background-color: #243E73;
`;

export const LogoContainer = styled.div`
  display: flex;
  grid-column: 1 / 2;
  margin: 0px;
  background-color: #243E73;
  padding: 10px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  grid-column: 3 / 4;
  margin: 0px;
  //background-color: #243E73;
  padding-right: 30px;
`;

export const BodyContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  grid-row: 2 / 3;
  margin: 0px;
  background-color: #F2B807;
  padding-right: 30px;
  margin: 0px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-row: 2 / 3;
  margin: 0px;
  justify-items: center;
  background-color: #243E73;
  border-radius: 5%;
  padding: 10px;
  margin: 5px 20px;
`;

export const Logo = styled.img`
  width: 250px;
`;
export const ImgPokemon = styled.img`
  width: 200px;
  border-radius: 5%;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextMenu = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding: 0px;
  cursor: pointer;
  margin: 10px 5px;
  color: darkgray;
    :hover {
    color: #fdba12;
  };
`




  
