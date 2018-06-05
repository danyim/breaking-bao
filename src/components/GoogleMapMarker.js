import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Marker = styled.div`
  position: 'relative';
  height: 90px;
  width: 205px;
  top: -20px;
  left: -30px;
  background-color: #fff;
  opacity: 0.8;
  padding: 2;
  text-align: center;
`

const GoogleMapMarker = props => <Marker>{props.children}</Marker>

GoogleMapMarker.PropTypes = {
  children: PropTypes.node
}

GoogleMapMarker.PefaultProps = {
  children: null
}

export default GoogleMapMarker
