import React, { Component } from "react";

import "./starships-page";

import ItemList from "../item-list";
// import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

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

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onStarshipSelected}
            getData={this.swapiService.getAllStarships}
          />
        </div>
        {/* <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div> */}
      </div>
    );
  }
}
