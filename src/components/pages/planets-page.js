import React, { Component } from "react";

import Row from "../row";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <div>
        <h2>Planets</h2>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </div>
    );
  }
}
