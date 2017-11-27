import React from 'react'
import Layout from '../../components/Layout'
import s from './styles.css'
import { title, html } from './index.md'

class SchedulePage extends React.Component {
  componentDidMount() {
    document.title = title
  }

  render() {
    return (
      <Layout className={s.content}>
        <h3>
          {title}
        </h3>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default SchedulePage
