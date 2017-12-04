import React from 'react'
import { format, distanceInWordsStrict } from 'date-fns'
import Layout from '../../components/Layout'
import s from './styles.css'
import { getEvents } from '../api'
import { title } from './index.md'

class SchedulePage extends React.Component {
  state = {
    events: []
  }

  componentDidMount() {
    document.title = title
    getEvents().then(e => {
      this.setState({ events: e.data.events })
    })
  }

  dashSeparate(...values) {
    return delimiter =>
      values.reduce((acc, val) => {
        if (acc === ' ') {
          return `${val}`
        } else if (val) {
          return `${acc}${delimiter}${val}`
        }
        return acc
      }, ' ')
  }

  render() {
    return (
      <Layout className={s.content}>
        <h3 className={s.pageTitle}>
          {title}
        </h3>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            {/*
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
            */}
            {this.state.events.map(e =>
              <section className={s.event} key={e.id}>
                <header>
                  <mark name="accent">
                    <strong>
                      {format(e.start_date, 'ddd MMM DD')}
                    </strong>
                  </mark>
                  <mark>
                    <span dangerouslySetInnerHTML={{ __html: e.title }} />
                  </mark>
                </header>
                <div name="time">
                  {format(e.start_date, 'h:mm a')} -{' '}
                  {format(e.end_date, 'h:mm a')} ({distanceInWordsStrict(e.start_date, e.end_date)})
                </div>
                {!Array.isArray(e.venue) &&
                  <a
                    href={`https://maps.google.com/?q=${this.dashSeparate(
                      e.venue.address,
                      e.venue.city,
                      e.venue.zip
                    )(', ')}`}
                  >
                    <div
                      name="location"
                      dangerouslySetInnerHTML={{
                        __html: this.dashSeparate(
                          e.venue.venue,
                          e.venue.address,
                          e.venue.city,
                          e.venue.zip
                        )(', ')
                      }}
                    />
                  </a>}

                <div
                  name="description"
                  dangerouslySetInnerHTML={{ __html: e.description }}
                />
              </section>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default SchedulePage
