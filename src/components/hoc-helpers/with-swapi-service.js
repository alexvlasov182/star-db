import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          if (typeof mapMethodsToProps !== "function") {
            throw new Error("mapMethodsToProps should be a function");
          }
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
