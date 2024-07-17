import React, { Component } from "react";

import Header from "../header";

// import StrshipsPage from "../starships-page/starships-page";
// import PlanetsPage from "../planets-page";

import "./app.css";

import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

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

    const { getPerson, getStraship, getPersonImage, getStarshipImage } =
      this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="birthYear" label="Birth Year: " />
        <Record field="gender" label="Gender: " />
        <Record field="eyeColor" label="Eye Color: " />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStraship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model: " />
        <Record field="cargoCapacity" label="Cargo Capacity: " />
        <Record field="passengers" label="Passengers: " />
      </ItemDetails>
    );

    return (
      <div className="container">
        <Header />
        <div>
          {/* <RandomPlanet /> */}
          {/* <ErrorButton /> */}
        </div>
        <Row left={personDetails} right={starshipDetails} />
        {/* <PeoplePage /> */}
        {/* <StrshipsPage />
        <PlanetsPage /> */}
      </div>
    );
  }
}
