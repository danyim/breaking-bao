import axios from 'axios'

export function getEvents() {
  return axios.get('http://api.breakingbao.com/wp-json/tribe/events/v1/events')
}
