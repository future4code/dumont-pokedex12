import styled from "styled-components";
import { DarkBlue } from "../Styled/colors";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  overflow-x: hidden;
  background-color: #F2B807;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-row: 1 / 2;
  grid-template-rows: 1fr 2fr 1fr;
  width: 100vw;
  margin: 0px;
  background-color: #243E73;
`;

export const LogoContainer = styled.div`
  display: flex;
  grid-column: 1 / 2;
  margin: 0px;
  padding: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  grid-column: 2 / 3;
  margin: 0px;
  //padding-right: 30px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  grid-column: 3 / 4;
  margin: 0px;
  padding-right: 30px;
`;

export const BodyContainerList = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-evenly;
  grid-row: 2 / 3;
  margin: 0px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

export const CardContainer = styled.div`
  display: grid;
  width: 18vw;
  grid-row: 2 / 3;
  margin: 20px 10px;
  justify-items: center;
  background-color: #243E73;
  border-radius: 5%;
  padding: 10px;
  box-sizing: border-box;
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

export const TextTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  padding: 0px;
  color: white;
`

export const TextMenu = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding: 0px;
  cursor: pointer;
  margin: 10px 5px;
  color: white;
    :hover {
    color: #F2B807;
  };
`
export const YellowButton = styled.button`
width: 7vw;
height: 6vh;
margin: 5px;
font-size: 10px;
font-weight: 800;
border: none;
cursor: pointer;
border-radius: 8%;
color: black;
background-color: #F2B807;
:hover {
  background-color: #BF920A;
};
`