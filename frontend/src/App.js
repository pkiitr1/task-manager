import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
