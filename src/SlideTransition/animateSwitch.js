import React from "react";
import {Switch, Route} from "react-router-dom";

export default (SlideIn) => ({updateStep, children}) => (
  <Route
    render={
      ({location}) => (
        <SlideIn uniqKey={location.pathname}
                 updateStep={updateStep}>
          <Switch location={location}>
            {children}
          </Switch>
        </SlideIn>
      )
    }
  />
);
