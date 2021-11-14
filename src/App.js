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
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Articulos from "./components/Articulos/Articulos";
import FirebaseTest from "./components/firebasetest";



export default function App() {
  return (
    <Router>      
        

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

          <Route path="/login">
              <Login/>
          </Route>
          
          <Route path="/register" component={Register} />
          <Route path="/reset" component={Reset} />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/articulos">
              <Articulos/>
          </Route>

          <Route path="/firebasetest">
              <FirebaseTest/>
          </Route>

          

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}



