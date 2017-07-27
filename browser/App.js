import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import {connect} from 'react-redux';
import axios from 'axios';
import {load_tasks} from './reducer';

const routes = [
  { path: '/',
    exact: true,
    main: Home
  },
  { path: '/about',
    main: About
  }
];

class App extends React.Component {
  
  componentDidMount() {
    axios.get('/tasks')
    .then(res => {
      this.props.load_tasks(res.data);
    })
  }

  render() {

    return (
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
    )
  }
} 

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  load_tasks: tasks => {
    dispatch(load_tasks(tasks));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);









