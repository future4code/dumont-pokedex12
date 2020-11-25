import React, { useState, } from "react";
import GlobalStateContext from "./global/GlobalStateContext";
import axios from "axios";
import Router from "../src/components/router/Router";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPodedex] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  //const [pokeImage, setPokeImage] = useState([])

  const getPokemons = () => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/",
      )
      .then((res) => {
        setPokemons(res.data.results);

      })
      .catch((err) => {
        console.log(err);
      });
  };

/*   const getPokeImage = (url) => {
        axios
      .get(url)

      .then((res) => {
        setPokeImage(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */


  const data = { pokemons, setPokemons, getPokemons, pokedex, setPodedex, pokeDetails, setPokeDetails };

  return (
    <GlobalStateContext.Provider value={data}>
      <Router />
    </GlobalStateContext.Provider>
  );
};

export default App;
