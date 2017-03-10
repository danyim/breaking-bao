import React from 'react';
import Layout from '../../components/Layout';
import Splash from '../../components/Splash';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {};

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <p>
          <br /><br />
        </p>
        <div className={`mdl-grid ${s.centered}`}>
          <div className="mdl-cell mdl-cell--8-col">
            <Splash width={700} height={375} className="center" />
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
