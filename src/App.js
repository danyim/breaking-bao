import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import Home from './scenes/home'
import Contact from './scenes/contact'
import Location from './scenes/location'
import Schedule from './scenes/schedule'
import Press from './scenes/press'
import Menu from './scenes/menu'
import ErrorComponent from './scenes/error'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/press" component={Press} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/location" component={Location} />
        <Route component={ErrorComponent} />
      </Switch>
    )
  }
}

export default App
