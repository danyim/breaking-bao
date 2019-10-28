import React from 'react'
import Layout from '../../components/Layout/Layout'
import Flex from '../../components/Flex'

const LocationPage = () => (
  <Layout title="Location">
    <Flex justifyCenter><div>
      <strong>
        <a href="https://www.politanrow.com/locations" target="_blank" rel="noopener noreferrer">
          <img
            src="http://api.breakingbao.com/wp-content/uploads/2019/10/Politan-Solid-Compressed-web.png"
            alt="Politan Houston"
            width="200"
          />
          <br />
          Politan Row Food Hall
        </a>
      </strong>
      <br />
      2445 Times Blvd, Houston, TX 77005
      </div>
      {/*
      <div className="mdl-cell mdl-cell--8-col">

        <GoogleMap center={{ lat: 29.7166325, lng: -95.4174284 }} zoom={17}>
          <GoogleMapMarker lat={29.7166325} lng={-95.4174284}>
            <Logo width="60px" height="60px" />
            <strong>Politan Row Food Hall</strong>
            <br />
            2445 Times Blvd, Houston, TX 77005
          </GoogleMapMarker>
        </GoogleMap>
      </div>
      <div className="mdl-cell mdl-cell--4-col">
        <p>
          Follow us on Twitter{' '}
          <a href="https://twitter.com/breakingbaotx" target="_blank" rel="noopener noreferrer">
            @breakingbaotx
          </a>!
        </p>
        <Twitter user="breakingbaotx" limit={3} chrome="noheader, nofooter" />
      </div>
      */}
    </Flex>
  </Layout>
)

export default LocationPage
