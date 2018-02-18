import React, { Component } from 'react'
import Layout from '../../components/Layout/Layout'
import Splash from '../../components/Splash/Splash'
import s from './styles.css'
import { title, html } from './index.md'

class HomePage extends Component {
  static propTypes = {}

  componentDidMount() {
    document.title = title
  }

  render() {
    return (
      <Layout className={s.content}>
        <p>
          <br />
          <br />
        </p>
        <div className={`mdl-grid ${s.centered}`}>
          <div className="mdl-cell mdl-cell--10-col">
            <Splash width={900} height={375} className="center" />
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <p>
          <br />
          <br />
        </p>
      </Layout>
    )
  }
}

export default HomePage
