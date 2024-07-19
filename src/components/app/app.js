import React, { Component } from "react";
// import PlanetsPage from "../planets-page";

import Header from "../header";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import RandomPlanet from "../random-planet/random-planet";

import "./app.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    hasError: false,
  };

  swapiService = new SwapiService();

  componentDidCatch() {
    console.log("componentDidCatch()");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="container">
            <Header />
            <RandomPlanet />

            <Routes>
              <Route path="/" element={<h2>Welcome to StarDB</h2>} />

              <Route path="/people" element={<PeoplePage />} />
              <Route path="/planets" element={<PlanetsPage />} />
              <Route path="/starships" element={<StarshipsPage />} />
            </Routes>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
