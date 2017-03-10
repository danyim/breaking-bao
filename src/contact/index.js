import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class ContactPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>{title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    );
  }

}

export default ContactPage;
