import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Navigation";
import Home from "./Home";
import Book from "./Books";
import Review from "./Reviews";
import Read from "./toRead";
import Header from "./Header";
import Footer from "./Footer";
import History from "./History";

function Routes() {
  return (
    <Router history={History}>
      <div className="experiment">
        <div class="experiment-class">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Books" exact component={Book} />
            <Route path="/Books/:id" component={Review} />
            <Route path="/Add" component={Read} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default Routes;
