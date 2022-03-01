import React from "react";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./Preview";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={WebcamCapture}>
            <WebcamCapture />
          </Route>
          <Route exact path="/Preview" component={Preview}>
            <Preview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
