import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  //Redirect,
} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
// Think about renaming influences to features
import Influences from './containers/Influences/Influences';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='font-sans bg-secondary min-h-screen'>
          <Layout>
            <Switch>
              <Route path='/feat' exact component={Influences} />
              <Route path='/' exact component={Auth} />
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
