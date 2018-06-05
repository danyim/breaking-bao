import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  line-height: 64px;
  padding: 0 24px;
  font-family: 'Dosis', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: black;
  text-transform: uppercase;
  transition: all 0.2s;
  text-decoration: none;

  &:active,
  &:visited,
  &:link {
    color: black;
  }

  &:hover {
    color: #ff4907;
    transform: scale(1.1, 1.1);
    & > svg * {
      fill: #ff4907;
    }
  }

  &:active {
    font-weight: 800;
    color: #c0c0c0;

    &:hover {
      color: #c0c0c0;
      transform: none;
    }
  }
`

class NavLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired
  }

  render() {
    const { to } = this.props
    return <StyledLink to={to}>{this.props.children}</StyledLink>
  }
}

export default NavLink
