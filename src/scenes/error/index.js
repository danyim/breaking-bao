import React, { Component } from 'react'
import PropTypes from 'prop-types'
import history from '../../history'
import Layout from '../../components/Layout/Layout'
import Logo from '../../components/Logo'
import Link from '../../components/Link'
import s from './styles.css'

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

  goBack = event => {
    event.preventDefault()
    history.goBack()
  }

  render() {
    if (this.props.error) console.error(this.props.error) // eslint-disable-line no-console

    const [code, title] =
      this.props.error && this.props.error.status === 404
        ? ['404', "Page doesn't exist"]
        : ['Error', 'Oups, something went wrong']

    return (
      <Layout className={s.content}>
        <main className={s.content}>
          <Logo className={s.logo} width={'250px'} height={'250px'} />
          <h1 className={s.code}>
            {code}
          </h1>
          <p className={s.title}>
            {title} 😭
          </p>
        </main>
      </Layout>
    )
  }
}

export default ErrorPage
