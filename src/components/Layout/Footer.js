import React, { Component } from 'react'
import s from './Footer.css'

function Footer() {
  return (
    <footer className={`mdl-mini-footer ${s.transparent}`}>
      <div className="mdl-mini-footer__right-section">
        <div className={`mdl-logo ${s.logo}`}>
          made with &lt;3 in htx &copy; {new Date().getFullYear()} by{' '}
          <a
            href="http://isomorph.co"
            rel="noopener noreferrer"
            target="_blank"
          >
            isomorph labs
          </a>.
        </div>
      </div>
    </footer>
  )
}

export default Footer
