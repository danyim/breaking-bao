import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import NavLink from './NavLink'
import Logo from '../Logo'

const Container = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const Navigation = props => {
  const { location: { pathname = '' } = {} } = props

  return (
    <Container>
      <NavLink to="/">
        <Logo width="75px" height="75px" />
      </NavLink>
      <NavLink className={pathname === '/menu' ? 'active' : ''} to="/menu">
        Menu
      </NavLink>
      <NavLink className={pathname === '/location' ? 'active' : ''} to="/location">
        Location
      </NavLink>
      <NavLink className={pathname === '/press' ? 'active' : ''} to="/press">
        Press
      </NavLink>
      <NavLink className={pathname === '/contact' ? 'active' : ''} to="/contact">
        Contact
      </NavLink>
      {
        // <NavLink to="/contact">Contact</NavLink>
      }
    </Container>
  )
}

export default withRouter(Navigation)
