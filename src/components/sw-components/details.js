import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStraship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="birthYear" label="Birth Year: " />
      <Record field="gender" label="Gender: " />
      <Record field="eyeColor" label="Eye Color: " />
    </ItemDetails>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population: " />
      <Record field="rotationPeriod" label="Rotation Period: " />
      <Record field="diameter" label="Diameter: " />
    </ItemDetails>
  );
};
const StrshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStraship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model: " />
      <Record field="cargoCapacity" label="Cargo Capacity: " />
      <Record field="passengers" label="Passengers: " />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StrshipDetails };
