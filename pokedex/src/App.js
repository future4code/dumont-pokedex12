import React, { useState, } from "react";
import GlobalStateContext from "./global/GlobalStateContext";
import axios from "axios";
import HomePage from "./components/HomePage";
import DetailsPokemon from "./components/DetailsPokemon";
import Pokedex from "./components/Pokedex";
import Router from "../src/components/router/Router";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPodedex] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  const [pokeImage, setPokeImage] = useState({})

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

  const getPokeImage = () => {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/1/",
      )
      .then((res) => {
        setPokeImage(res.data.sprites.back_default);
        console.log(pokeImage)
        console.log(pokeImage)
        console.log(res.data.sprites.back_default)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const data = { pokemons, setPokemons, getPokemons, pokedex, setPodedex, pokeDetails, setPokeDetails, pokeImage, setPokeImage, getPokeImage };

  return (
    <GlobalStateContext.Provider value={data}>
      <Router />
    </GlobalStateContext.Provider>
  );
};

export default App;
