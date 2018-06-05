import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  line-height: 5rem;
  padding: 0 2rem;
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

  &.active {
    font-weight: 800;
    color: rgba(0, 0, 0, 0.2);

    &:hover {
      color: rgba(0, 0, 0, 0.2);
      transform: none;
    }
  }

  @media screen and (max-width: 1024px) {
    line-height: 3rem;
    padding: 0 0.5rem;
  }
`

class NavLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired
  }

  render() {
    const { to, className } = this.props
    return (
      <StyledLink to={to} className={className}>
        {this.props.children}
      </StyledLink>
    )
  }
}

export default NavLink
