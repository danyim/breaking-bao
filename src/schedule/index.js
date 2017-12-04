import React from 'react'
import { groupBy, forOwn } from 'lodash'
import { format, distanceInWordsStrict } from 'date-fns'
import Layout from '../../components/Layout'
import s from './styles.css'
import { getEvents } from '../api'
import { title } from './index.md'

class SchedulePage extends React.Component {
  state = {
    events: [],
    eventsGroupedByDay: null
  }

  componentDidMount() {
    document.title = title
    getEvents().then(e => {
      this.setState({
        events: e.data.events,
        eventsGroupedByDay: groupBy(e.data.events, k =>
          format(k.start_date, 'ddd MMM DD')
        )
      })
    })
  }

  delimit(...values) {
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
            {this.state.eventsGroupedByDay !== null &&
              forOwn(this.state.eventsGroupedByDay, (v, k) =>
                <div>
                  {k}
                </div>
              )}
            */}
            {this.state.events.length === 0 && <div>Loading events...</div>}
            {this.state.events.map(e =>
              <section className={s.event} key={e.id}>
                <header>
                  <mark name="accent">
                    <strong>
                      {format(e.start_date, 'ddd MMM DD')}
                    </strong>
                  </mark>
                  <mark>
                    <span
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                  </mark>
                </header>
                <div name="time">
                  {format(e.start_date, 'h:mm a')} -{' '}
                  {format(e.end_date, 'h:mm a')} ({distanceInWordsStrict(e.start_date, e.end_date)})
                </div>
                {e.website &&
                  <a href={e.website} rel="noopener noreferrer" target="_blank">
                    Event Website
                  </a>}
                {!Array.isArray(e.venue) &&
                  <div name="location">
                    {e.venue.venue}
                    {' @ '}
                    <a
                      href={`https://maps.google.com/?q=${this.delimit(
                        e.venue.address,
                        e.venue.city,
                        e.venue.zip
                      )(', ')}`}
                    >
                      <span
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          __html: this.delimit(
                            e.venue.address,
                            e.venue.city,
                            `${e.venue.state} ${e.venue.zip}`
                          )(', ')
                        }}
                      />
                    </a>
                  </div>}

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
