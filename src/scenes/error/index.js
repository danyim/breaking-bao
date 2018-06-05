import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'
import Logo from '../../components/Logo'

const Container = styled(Layout)`
  padding-bottom: 80px;
  text-align: center;

  :root {
    --color: #607d8b;
  }

  & .logo {
    transform: rotate(180deg);
  }

  & .logo path {
    fill: var(--color);
  }

  & .code {
    margin: 0;
    color: var(--color);
    letter-spacing: 0.02em;
    font-weight: 300;
    font-size: 15em;
    line-height: 1;
  }

  & .title {
    padding-bottom: 0.5em;
    color: var(--color);
    letter-spacing: 0.02em;
    font-weight: 400;
    font-size: 2em;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    line-height: 1em;
  }

  @media only screen and (max-width: 280px) {
    & .title {
      margin: 0 0 0.3em;
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 1024px) {
    & .code {
      font-size: 10em;
    }

    & .title {
      font-size: 1.5em;
    }
  }
`
class ErrorPage extends Component {
  static propTypes = {
    error: PropTypes.object // eslint-disable-line react/forbid-prop-types
  }

  componentDidMount() {
    document.title =
      this.props.error && this.props.error.status === 404
        ? 'Page Not Found'
        : 'Error'
  }

  render() {
    if (this.props.error) console.error(this.props.error) // eslint-disable-line no-console

    const [code, title] =
      this.props.error && this.props.error.status === 404
        ? ['404', "Page doesn't exist"]
        : ['Error', 'Oops, something went wrong']

    return (
      <Container>
        <Logo width="100%" height="100%" className="logo" />
        <h1 className="code">{code}</h1>
        <p className="title">{title}</p>
      </Container>
    )
  }
}

export default ErrorPage
