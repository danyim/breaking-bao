import React from 'react'
import Layout from '../../components/Layout/Layout'
import s from './styles.css'
import { title } from './index.md'

const PressPage = () =>
  <Layout className={s.content}>
    <h3 className={s.pageTitle}>
      {title}
    </h3>
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/y8N1hNdPW-Q"
          frameBorder="0"
          allow="autoPlay; encrypted-media"
          allowFullScreen
          title="Great Day Houston"
        />
      </div>
    </div>
  </Layout>

export default PressPage
