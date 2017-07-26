import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';

const routes = [
  { path: '/',
    exact: true,
    main: Home
  },
  { path: '/about',
    main: About
  }
];

const App = () => (
  <Router>
    <div className="app">

      <Nav />

      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}

    </div>
  </Router>
);

export default App;