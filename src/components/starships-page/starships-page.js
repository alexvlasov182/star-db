import React, { Component } from "react";

import "./starships-page";

import ItemList from "../item-list";
import StarshipDetails from "../starships-details";
import ErrorIndicator from "../error-indicator";
import Row from "../row";

import SwapiService from "../../services/swapi-service";

export default class StrshipsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedStarship: 5,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onStarshipSelected = (selectedStarship) => {
    this.setState({
      selectedStarship: selectedStarship,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onStarshipSelected}
        getData={this.swapiService.getAllStarships}
      />
    );

    const personDetails = (
      <StarshipDetails starshipId={this.state.selectedStarship} />
    );

    return (
      <div>
        <Row left={itemList} right={personDetails} />
      </div>
    );
  }
}
