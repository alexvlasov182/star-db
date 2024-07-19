import React, { Component } from "react";

import Row from "../row";
import { StarshipList, StrshipDetails } from "../sw-components";

export default class StarshipsPage extends Component {
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
        <h2>Starships</h2>
        <Row
          left={<StarshipList onItemSelected={this.onItemSelected} />}
          right={<StrshipDetails itemId={selectedItem} />}
        />
      </div>
    );
  }
}
