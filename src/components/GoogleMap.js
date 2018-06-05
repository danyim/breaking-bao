import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

class GoogleMap extends Component {
  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired,
    zoom: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    zoom: 11,
    width: '100%',
    height: '400px',
    children: null
  }

  render() {
    return (
      <div style={{ width: this.props.width, height: this.props.height }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCRcjCTkxU1bEhENg8KWykgH2iRS-fyYAs'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap
