import React, { Component } from "react";

import "./planets-page";

import ItemList from "../item-list";
import PlanetDetails from "../planet-details";
import ErrorIndicator from "../error-indicator";

import SwapiService from "../../services/swapi-service";
import Row from "../row";

export default class PlantesPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPlanet: 5,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onPlanetSelected = (selectedPlanet) => {
    this.setState({
      selectedPlanet: selectedPlanet,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPlanetSelected}
        getData={this.swapiService.getAllPlanets}
      />
    );

    const planetDetails = (
      <PlanetDetails planetId={this.state.selectedPlanet} />
    );

    return <Row left={itemList} right={planetDetails} />;
  }
}
