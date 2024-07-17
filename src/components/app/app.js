import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page/people-page";
import StrshipsPage from "../starships-page/starships-page";
import PlanetsPage from "../planets-page";

import "./app.css";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    console.log("componentDidCatch()");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <Header />
        <div>
          <RandomPlanet />
          <ErrorButton />
        </div>

        <PeoplePage />
        <StrshipsPage />
        <PlanetsPage />
      </div>
    );
  }
}
