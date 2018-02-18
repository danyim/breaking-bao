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
        className={s.nav}
        ref={node => {
          this.root = node
        }}
      >
        <NavLink to="/">
          <Logo className={s.logo} width="75px" height="75px" />
        </NavLink>
        <NavLink
          className={cx({
            [`${s.active}`]: history.location.pathname === '/menu'
          })}
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink
          className={cx({
            [`${s.active}`]: history.location.pathname === '/schedule'
          })}
          to="/schedule"
        >
          Schedule
        </NavLink>
        <NavLink
          className={cx({
            [`${s.active}`]: history.location.pathname === '/press'
          })}
          to="/press"
        >
          Press
        </NavLink>
        <NavLink
          className={cx({
            [`${s.active}`]: history.location.pathname === '/contact'
          })}
          to="/contact"
        >
          Contact
        </NavLink>
        {
          // <NavLink to="/contact">Contact</NavLink>
        }
      </nav>
    )
  }
}

export default Navigation
