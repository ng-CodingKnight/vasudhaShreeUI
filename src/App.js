import React from "react";
import { Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./pages/Home/Home";
import "./App.css";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
