import React, { Component } from 'react'
import styled from 'styled-components'
import { format, distanceInWordsStrict } from 'date-fns'
import Layout from '../../components/Layout/Layout'
import { getEvents } from '../../api'

const Container = styled(Layout)`
  & .event {
    margin-bottom: 40px;
    font-size: 1.1rem;
    line-height: 1.2rem;

    & > header {
      margin-bottom: 0;
      font-size: 1.5rem;
      line-height: 1.6rem;
      display: flex;
      flex-flow: row wrap;

      & mark {
        padding: 10px 7px;
        background-color: black;
        color: white;
      }

      & > mark[name='accent'] {
        background-color: #ff4907;
      }
    }

    & div[name='time'] {
      font-weight: bold;
      margin: 10px 0;
    }

    & div[name='location'] {
      margin: 5px 0;
    }

    & div[name='description'] {
      margin: 5px 0;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    overflow: scroll;
  }
`

class SchedulePage extends Component {
  static delimit(...values) {
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

  state = {
    events: []
  }

  componentDidMount() {
    const options = { perPage: 20 }
    getEvents(options).then(e => {
      this.setState({
        events: e.data.events
      })
    })
  }

  render() {
    return (
      <Container title="Schedule">
        <div>
          {this.state.events.length === 0 && <div>Loading...</div>}
          {this.state.events.map(e => (
            <section className={'event'} key={e.id}>
              <header>
                <mark name="accent">
                  <strong>{format(e.start_date, 'ddd MMM DD')}</strong>
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
                {format(e.end_date, 'h:mm a')} ({distanceInWordsStrict(
                  e.start_date,
                  e.end_date
                )})
              </div>
              {e.website && (
                <a href={e.website} rel="noopener noreferrer" target="_blank">
                  Event Website
                </a>
              )}
              {!Array.isArray(e.venue) && (
                <div name="location">
                  {e.venue.venue}
                  {' @ '}
                  <a
                    href={`https://maps.google.com/?q=${SchedulePage.delimit(
                      e.venue.address,
                      e.venue.city,
                      e.venue.zip
                    )(', ')}`}
                    target="_blank noreferrer noopener"
                  >
                    <span
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{
                        __html: SchedulePage.delimit(
                          e.venue.address,
                          e.venue.city,
                          `${e.venue.state} ${e.venue.zip}`
                        )(', ')
                      }}
                    />
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>
      </Container>
    )
  }
}

export default SchedulePage
