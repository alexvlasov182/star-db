import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

import "./starships-details.css";

export default class StarshipDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
  };

  componentDidMount() {
    this.updateStarship();
  }

  componentDidUpdate(prevProps) {
    if (this.props.starshipId !== prevProps.starshipId) {
      this.updateStarship();
    }
  }

  updateStarship() {
    const { starshipId } = this.props;
    if (!starshipId) {
      return;
    }

    this.swapiService.getPlanet(starshipId).then((starship) => {
      this.setState({ starship });
    });
  }

  render() {
    if (!this.state.starship) {
      return <span>Select a starship from list</span>;
    }

    const { id, name, model, passengers, cargoCapacity } = this.state.starship;
    return (
      <div className="starship-details card">
        <img
          className="starship-image"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt="Starship"
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model: </span>
              <span>{model}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Passengers: </span>
              <span>{passengers}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Cargo Capacity: </span>
              <span>{cargoCapacity}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
