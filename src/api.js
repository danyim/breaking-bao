import axios from 'axios'

export function getEvents(options = {}) {
  const { perPage = 10 } = options

  return axios.get(`http://api.breakingbao.com/wp-json/tribe/events/v1/events?per_page=${perPage}`)
}
