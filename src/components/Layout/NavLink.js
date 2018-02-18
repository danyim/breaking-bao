import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import history from '../../history'

const Link = styled.a`
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
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onClick: PropTypes.func
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    if (event.button !== 0 /* left click */) {
      return
    }

    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return
    }

    if (event.defaultPrevented === true) {
      return
    }

    event.preventDefault()

    if (this.props.to) {
      history.push(this.props.to)
    } else {
      history.push({
        pathname: event.currentTarget.pathname,
        search: event.currentTarget.search
      })
    }
  }

  render() {
    const { to, ...props } = this.props // eslint-disable-line no-use-before-define
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return (
      <Link
        href={typeof to === 'string' ? to : history.createHref(to)}
        {...props}
        onClick={this.handleClick}
      />
    )
  }
}

export default NavLink
