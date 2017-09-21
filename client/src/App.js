import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Main } from './components/Main';
import { Search } from './components/Search';
import { Saved } from './components/Saved';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>

          <Route path="search" component={Search} />
          <Route path="saved" component={Saved} />

          <IndexRoute component={Search} />

        </Route>
      </Router>
    )
  }
}

export default App;