import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GetPokesFromApi } from "./components/getPokesFromApi/GetPokesFromApi";
import Test from "./components/getPokesFromApi/test";
  
import { Home } from "./components/home/Home";
import { ParImpar } from "./components/ParImpar/ParImpar";
import { Potencia } from "./components/potencia/Potencia";
import { Suma } from "./components/suma/Suma";
import { Bisiesto } from "./components/yearbisiesto/bisiesto";

export default function App() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/suma">
            <Suma />
          </Route>          

          <Route path="/paroimpar">
            <ParImpar />
          </Route>

          <Route path="/yearbisiesto">
            <Bisiesto />
          </Route>

          <Route path="/potencia">
            <Potencia />
          </Route>

          <Route path="/test">
            <Test/>            
          </Route>

          <Route path="/pokes">            
            <GetPokesFromApi/>
          </Route>



          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



