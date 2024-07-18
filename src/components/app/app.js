import React, { Component } from "react";

import Header from "../header";

// import PlanetsPage from "../planets-page";

import "./app.css";

import ErrorIndicator from "../error-indicator";
import Row from "../row";

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import {
  PersonList,
  PersonDetails,
  PlanetDetails,
  StrshipDetails,
  PlanetList,
  StarshipList,
} from "../sw-components";

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
        <PersonDetails itemId={5} />
        <StrshipDetails itemId={11} />
        <PlanetDetails itemId={6} />
        <PlanetDetails />
        {/* <StarshipDetails /> */}

        <PersonList />

        <PlanetList />

        <StarshipList />

        {/* <PeoplePage /> */}

        {/* <PlanetsPage />  */}
      </div>
    );
  }
}
