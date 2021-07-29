import React from "react";
import { Switch, Route } from "react-router-dom";
import CvMaker from "./pages/cv-maker";
import AboutME from "./pages/about-me";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <Route path="/about-me">
        <AboutME />
      </Route>
      <Route path="/" exact>
        <CvMaker />
      </Route>
    </Switch>
  );
}

export default App;
