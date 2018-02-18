import React from 'react'
import Navigation from './Navigation'
import s from './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header
        className={`mdl-layout__header mdl-layout__header--transparent ${s.header}`}
        ref={node => (this.root = node)}
      >
        <div className={`mdl-layout__header-row ${s.row}`}>
          <div className="mdl-layout-spacer" />
          <Navigation />
        </div>
      </header>
    )
  }
}

export default Header
