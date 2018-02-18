import React, { Component } from 'react'
import PropTypes from 'prop-types'

const markerStyle = {
  position: 'relative',
  height: 90,
  width: 205,
  top: -20,
  left: -30,
  backgroundColor: 'white',
  opacity: 0.8,
  padding: 2,
  textAlign: 'center'
}

class GoogleMapMarker extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  render() {
    return (
      <div style={markerStyle}>
        {this.props.children}
      </div>
    )
  }
}

export default GoogleMapMarker
