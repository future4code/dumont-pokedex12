import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import DetailsPokemon from "../DetailsPokemon";
import Pokedex from "../Pokedex";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/detalhes/:name">
          <DetailsPokemon />
        </Route>

        <Route exact path="/pokedex">
          <Pokedex />
        </Route>

        <Route>
          <div>"Erro 404 - Este Pokemon não existe!" </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
