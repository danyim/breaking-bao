import React, { PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends React.Component {

  static propTypes = {
    center: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    zoom: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    center: { lat: 29.761993, lng: -95.366302 },
    zoom: 11,
    width: '100%',
    height: '400px',
    children: null,
  };

  render() {
    return (
      <div style={{ width: this.props.width, height: this.props.height }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
