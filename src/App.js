import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavigationBar from './componen/navigationBar';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisPage from './pages/register';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisPage} />
        </Switch>
      </div>
    )
  }
}

export default App;