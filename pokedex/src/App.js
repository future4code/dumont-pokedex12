import React, { useState, useEffect } from "react";
import GlobalStateContext from "./global/GlobalStateContext";
import axios from "axios";
import Router from "../src/components/router/Router";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  //const [buttonPokedex, setButtonPokedex] = useState(true)
  const [textButton, setTextButton] = useState("ADICIONAR À POKEDEX")
  //const [functionName, setFunctionName] = useState("addPokedex")
  const [detailsButton, setDetailsButton] = useState("")
  const [detailsFunction, setDetailsFunction] = useState("")
  


  useEffect(() => {
    getPokemons();
  }, []);

  

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

  const data = { detailsFunction, setDetailsFunction, detailsButton, setDetailsButton, textButton, setTextButton, pokemons, setPokemons, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails };

  return (
    <GlobalStateContext.Provider value={data}>
      <Router />
    </GlobalStateContext.Provider>
  );
};

export default App;
