import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'
import Logo from '../../components/Logo'

const Container = styled(Layout)`
  padding-bottom: 80px;
  text-align: center;

  & .logo {
    transform: rotate(180deg);
    & path {
      fill: #de493f;
    }
  }

  & .code {
    margin: 0;
    color: var(--color);
    letter-spacing: 0.02em;
    font-weight: 300;
    line-height: 1;
  }

  & .title {
    padding-bottom: 0.5em;
    color: var(--color);
    letter-spacing: 0.02em;
    font-weight: 400;
    line-height: 1em;
  }
`
class ErrorPage extends Component {
  static propTypes = {
    error: PropTypes.object // eslint-disable-line react/forbid-prop-types
  }

  componentDidMount() {
    document.title =
      this.props.error && this.props.error.status === 404 ? 'Page Not Found' : 'Error'
  }

  render() {
    if (this.props.error) console.error(this.props.error) // eslint-disable-line no-console

    const [code, title] =
      this.props.error && this.props.error.status === 404
        ? ['404', "Page doesn't exist"]
        : ['Error', 'Oops! Something went wrong']

    return (
      <Container>
        <Logo width="60%" height="200px" className="logo" />
        <h1 className="code">{code}</h1>
        <p className="title">{title}</p>
      </Container>
    )
  }
}

export default ErrorPage
