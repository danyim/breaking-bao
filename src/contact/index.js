import React from 'react'
import Twitter from '../../components/Twitter'
import Layout from '../../components/Layout'
import s from './styles.css'
import { title, html } from './index.md'

class ContactPage extends React.Component {
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
          <div className="mdl-cell mdl-cell--8-col">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <p>
              Follow us on Twitter{' '}
              <a
                href="https://twitter.com/breakingbaotx"
                target="_blank"
                rel="noopener noreferrer"
              >
                @breakingbaotx
              </a>!
            </p>
            <Twitter
              user="breakingbaotx"
              limit={3}
              chrome="noheader, nofooter"
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactPage
