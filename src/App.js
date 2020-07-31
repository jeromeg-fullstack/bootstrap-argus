import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
 *@ All pages Import
 */

import Home from './pages/Home';
import ScrollToTop from './helpers/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import ServiceDetails from "./pages/ServiceDetails";

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
          <Route
            exact
            path={`${process.env.PUBLIC_URL + '/about'}`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + '/services'}`}
            component={Service}
          />
          <Route path={`${process.env.PUBLIC_URL + '/service/:serviceID'}`} component={ServiceDetails}/>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + '/contact'}`}
            component={Contact}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
