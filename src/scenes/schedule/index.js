import React, { Component } from 'react'
import styled from 'styled-components'
import { format, distanceInWordsStrict } from 'date-fns'
import AddToCalendar from 'react-add-to-calendar'

import Layout from '../../components/Layout/Layout'
import { getEvents } from '../../api'

const Container = styled(Layout)`
  & .event {
    margin-bottom: 40px;
    font-size: 1.1rem;
    line-height: 1.2rem;

    & > header {
      margin-bottom: 0;
      font-size: 1.3rem;
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

const CalendarButton = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  .react-add-to-calendar {
    display: flex;
    flex-flow: row nowrap;
    cursor: pointer;
    margin-top: 0.8rem;
    user-select: none;
    a {
      color: #000;
    }

    ul {
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        margin: 0 0.5rem;
      }
    }
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

  static utcIshDateToUTC(details) {
    const d = `${details.year}-${details.month}-${details.day}T${details.hour}:${details.minutes}:${
      details.seconds
    }`
    return d
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
                {format(e.start_date, 'h:mm a')} - {format(e.end_date, 'h:mm a')} ({distanceInWordsStrict(
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

              <CalendarButton>
                <AddToCalendar
                  buttonLabel="Add to calendar&nbsp;&nbsp;>"
                  event={{
                    title: `Breaking Bao @ ${e.title}`,
                    description: e.website,
                    location: `${e.venue.address}, ${e.venue.city}, ${e.venue.state} ${
                      e.venue.zip
                    }`,
                    // startTime: e.start_date,
                    // endTime: e.end_date
                    startTime: SchedulePage.utcIshDateToUTC(e.utc_start_date_details),
                    endTime: SchedulePage.utcIshDateToUTC(e.utc_end_date_details)
                  }}
                  buttonTemplate={{ 'calendar-plus-o': 'left' }}
                  listItems={[{ apple: 'iCal' }, { google: 'Google' }]}
                />
              </CalendarButton>
            </section>
          ))}
        </div>
      </Container>
    )
  }
}

export default SchedulePage
