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
        <h3 className={s.pageTitle}>
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
              Follow us @breakingbaotx on{' '}
              <a
                href="https://twitter.com/breakingbaotx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>,{' '}
              <a
                href="https://instagram.com/breakingbaotx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>,{' '}
              <a
                href="https://facebook.com/breakingbaotx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>, and Snapchat!
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
