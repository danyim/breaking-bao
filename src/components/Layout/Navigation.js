import React, { Component } from 'react'
import cx from 'classnames'
import NavLink from './NavLink'
import Logo from '../Logo'
import history from '../../history'
import s from './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav
        className="mdl-navigation"
        ref={node => {
          this.root = node
        }}
      >
        <NavLink className={`mdl-navigation__link ${s.link}`} to="/">
          <Logo className={s.logo} width="75px" height="75px" />
        </NavLink>
        <NavLink
          className={`mdl-navigation__link ${s.link} ${cx({
            [`${s.active}`]: history.location.pathname === '/menu'
          })}`}
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink
          className={`mdl-navigation__link ${s.link} ${cx({
            [`${s.active}`]: history.location.pathname === '/schedule'
          })}`}
          to="/schedule"
        >
          Schedule
        </NavLink>
        <NavLink
          className={`mdl-navigation__link ${s.link} ${cx({
            [`${s.active}`]: history.location.pathname === '/press'
          })}`}
          to="/press"
        >
          Press
        </NavLink>
        <NavLink
          className={`mdl-navigation__link ${s.link} ${cx({
            [`${s.active}`]: history.location.pathname === '/contact'
          })}`}
          to="/contact"
        >
          Contact
        </NavLink>
        {
          //<NavLink className={`mdl-navigation__link ${s.link}`} to="/contact">Contact</NavLink>
        }
      </nav>
    )
  }
}

export default Navigation
