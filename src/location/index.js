import React from 'react';
import Logo from '../../components/Logo';
import GoogleMap from '../../components/GoogleMap';
import Twitter from '../../components/Twitter';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class LocationPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const markerStyles = {
      position: 'relative',
      height: 90,
      width: 205,
      top: -20,
      left: -30,
      backgroundColor: 'white',
      opacity: 0.8,
      padding: 2,
      textAlign: 'center',
    };

    return (
      <Layout className={s.content}>
        <h3>{title}</h3>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--8-col">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <GoogleMap
              center={{ lat: 29.761993, lng: -95.366302 }}
              zoom={17}
            >
              <div
                style={markerStyles}
                lat={29.761993}
                lng={-95.366302}
              >
                <Logo width="60px" height="60px" />
                <strong>Bao Bus One</strong><br />
                123 Main, Houston, TX 77002
              </div>

              <div
                style={markerStyles}
                lat={29.76293}
                lng={-95.369}
              >
                <Logo width="60px" height="60px" />
                <strong>Breaking Bao Pop-up Event</strong><br />
                175 Elgin, Houston, TX 77002
              </div>
            </GoogleMap>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <p>
              Follow us on Twitter <a href="https://twitter.com/breakingbaotx" target="_blank">@breakingbaotx</a>
            </p>
            <Twitter
              user="breakingbaotx"
              limit={3}
              chrome="noheader, nofooter"
            />
          </div>
        </div>


      </Layout>
    );
  }

}

export default LocationPage;
