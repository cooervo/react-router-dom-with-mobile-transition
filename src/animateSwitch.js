import React from "react";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";

export const animateSwitch = (SlideIn) => ({updateStep, children}) => (
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
