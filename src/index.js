/*
 * Check out the article explaining this code in detail
 * at https://medium.com/@stephen.cook/animations-with-react-router-8e97222e25e1
 */
import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Link, Route} from "react-router-dom";
import SlideTransition from "./SlideTransition";

import "./styles.css";

class Container extends React.Component {
  state = {
    animate: false
  };

  render() {

    return (
      <div className="container">
        <SlideTransition>
          <Route
            path="/a"
            render={() => (
              <Link className="link" to="/b">
                A
              </Link>
            )}
          />
          <Route
            path="/b"
            render={() => (
              <Link className="link" to="/c">
                B
              </Link>
            )}
          />
          <Route
            path="/c"
            render={() => (
              <Link className="link" to="/d">
                C
              </Link>
            )}
          />
          <Route
            path="/d"
            render={() => (
              <Link className="link" to="/e">
                D
              </Link>
            )}
          />
          <Route
            path="/e"
            render={() => (
              <Link className="link" to="/a">
                E
              </Link>
            )}
          />
          <Route
            path="/"
            render={() => (
              <Link className="link white" to="/a">
                Default
              </Link>
            )}
          />
        </SlideTransition>
      </div>
    );
  }
}

const App = () => (
  <HashRouter>
    <Container/>
  </HashRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
