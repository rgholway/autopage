import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import Home from './Home'
import Second from './Second'
import Third from './Third'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/second" component={Second}/>
      <Route path="/third" component={Third}/>
    </Router>
  )
}

export default App
