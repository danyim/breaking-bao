import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'
import Flex from '../../components/Flex'

const FlexLocation = styled(Flex)`
  & > div:first-child {
    flex-basis: 350px;
    padding-left: 0;
  }

  & > div {
    flex: 1 1 auto;
    padding-left: 30px;
  }
`

const LocationPage = () => (
  <Layout title="Location">
    <FlexLocation justifyCenter>
      <Flex column justifyCenter>
        <a href="https://houston.politanrow.com/vendors" target="_blank" rel="noopener noreferrer">
          <img
            src="http://api.breakingbao.com/wp-content/uploads/2019/10/politan.jpg"
            alt="Politan Houston"
            width="250"
          />
        </a>
      </Flex>
      <Flex column justifyCenter>
        <h1>POLITAN HOUSTON</h1>
        <p>
          <a href="https://goo.gl/maps/eWgmNWSyR2nqoWaw6" target="_blank" rel="noopener noreferrer">
            2445 Times Blvd
            <br />
            Houston, TX 77005
          </a>
        </p>
      </Flex>
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
    </FlexLocation>
  </Layout>
)

export default LocationPage
