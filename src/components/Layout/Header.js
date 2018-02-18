import React, { Component } from 'react'
import Navigation from './Navigation'
import s from './Header.css'

class Header extends Component {
  render() {
    return (
      <header
        className={`mdl-layout__header mdl-layout__header--transparent ${s.header}`}
        ref={node => (this.root = node)}
      >
        <Navigation />
      </header>
    )
  }
}

export default Header
