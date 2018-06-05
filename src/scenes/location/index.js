import React from 'react'
import Logo from '../../components/Logo'
import GoogleMap from '../../components/GoogleMap'
import GoogleMapMarker from '../../components/GoogleMapMarker'
import Twitter from '../../components/Twitter'
import Layout from '../../components/Layout/Layout'

const LocationPage = () => (
  <Layout title="Location / Contact">
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--8-col">
        <p>
          We are a locally-owned business currently operating out of the
          **Houston area only**.
        </p>

        <p>
          For all inquiries, please send an email to{' '}
          <a
            href="mailto:holler@breakingbao.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            holler@breakingbao.com
          </a>.
        </p>

        <GoogleMap center={{ lat: 29.761993, lng: -95.366302 }} zoom={17}>
          <GoogleMapMarker lat={29.761993} lng={-95.366302}>
            <Logo width="60px" height="60px" />
            <strong>Bao Bus One</strong>
            <br />
            123 Main, Houston, TX 77002
          </GoogleMapMarker>

          <GoogleMapMarker lat={29.76293} lng={-95.369}>
            <Logo width="60px" height="60px" />
            <strong>Breaking Bao Pop-up Event</strong>
            <br />
            175 Elgin, Houston, TX 77002
          </GoogleMapMarker>
        </GoogleMap>
      </div>
      <div className="mdl-cell mdl-cell--4-col">
        <p>
          Follow us on Twitter{' '}
          <a
            href="https://twitter.com/breakingbaotx"
            target="_blank"
            rel="noopener noreferrer"
          >
            @breakingbaotx
          </a>!
        </p>
        <Twitter user="breakingbaotx" limit={3} chrome="noheader, nofooter" />
      </div>
    </div>
  </Layout>
)

export default LocationPage
