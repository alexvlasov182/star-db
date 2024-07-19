import React, { Component } from "react";
// import PlanetsPage from "../planets-page";

import Header from "../header";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import RandomPlanet from "../random-planet/random-planet";

import "./app.css";

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
        <div className="container">
          <Header />
          <RandomPlanet />

          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </SwapiServiceProvider>
    );
  }
}
