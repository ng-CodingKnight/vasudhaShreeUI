import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./globalStyles";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import ResearchDev from "./pages/R&D/ResearchDev";
import GalleryComponent from "./pages/GalleryComponent/GalleryComponent";

import Header from "./components/Header/Header";

import "./App.css";

function App() {

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/aboutUs" exact>
          <AboutUs />
        </Route>
        <Route path="/r&d" exact>
          <ResearchDev />
        </Route>
        <Route path="/gallery" exact>
          <GalleryComponent />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
