import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
 *@ All pages Import
 */

import Home from './pages/Home';
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + '/'}`}
            component={Home}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
