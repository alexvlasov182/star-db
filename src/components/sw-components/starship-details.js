import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";

import { withSwapiService } from "../hoc-helpers";

const StrshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model: " />
      <Record field="cargoCapacity" label="Cargo Capacity: " />
      <Record field="passengers" label="Passengers: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStraship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(StrshipDetails, mapMethodsToProps);
