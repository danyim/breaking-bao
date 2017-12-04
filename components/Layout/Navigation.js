import React from 'react'
import Link from '../Link'
import Logo from '../Logo'
import history from '../../src/history'
import cx from 'classnames'
import s from './Navigation.css'

class Navigation extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeElement(this.root)
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root)
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className={`mdl-navigation__link ${s.link}`} to="/">
          <Logo className={s.logo} width="75px" height="75px" />
        </Link>
        <Link
          className={`mdl-navigation__link ${s.link} ${cx({
            [`${s.active}`]: history.location.pathname === '/menu'
          })}`}
          to="/menu"
        >
          Menu
        </Link>
        <Link
          className={`mdl-navigation__link ${s.link} ${cx({
            [`${s.active}`]: history.location.pathname === '/schedule'
          })}`}
          to="/schedule"
        >
          Schedule
        </Link>
        <Link
          className={`mdl-navigation__link ${s.link} ${cx({
            [`${s.active}`]: history.location.pathname === '/contact'
          })}`}
          to="/contact"
        >
          Contact
        </Link>
        {
          //<Link className={`mdl-navigation__link ${s.link}`} to="/contact">Contact</Link>
        }
      </nav>
    )
  }
}

export default Navigation
