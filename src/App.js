import React from "react";
import { Route } from "react-router-dom";
import PizzaForm from "./source/PizzaForm";
import HomePage from "./source/HomePage";
import Navigation from "./source/Navigation";


const App = () => {
  return (
    <div>
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
