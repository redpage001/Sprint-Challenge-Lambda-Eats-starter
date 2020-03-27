import React from "react";
import { Route } from "react-router-dom";
import PizzaForm from "./source/PizzaForm";
import HomePage from "./source/HomePage";
import Navigation from "./source/Navigation";
import styled from "styled-components";


const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Route exact path={"/"}>
        <Navigation/>
        <HomePage/>
      </Route>
      <Route exact path={"/pizza"}>
        <Navigation/>
        <PizzaForm/>
      </Route>
    </div>
  );
};
export default App;
