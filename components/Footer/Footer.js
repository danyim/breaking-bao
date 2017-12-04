import React from 'react'
import s from './Footer.css'

function Footer() {
  return (
    <footer className={`mdl-mini-footer ${s.transparent}`}>
      <div className="mdl-mini-footer__right-section">
        <div className={`mdl-logo ${s.logo}`}>
          made in htx &copy; 2017. built by{' '}
          <a
            href="http://isomorph.co"
            rel="noopener noreferrer"
            target="_blank"
          >
            isom
          </a>.
        </div>
      </div>
    </footer>
  )
}

export default Footer
