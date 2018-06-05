import React from 'react'
import s from './Footer.css'

function Footer() {
  return (
    <footer className={s.transparent}>
      <div className={s.links}>
        @breakingbaotx
        <a href="https://www.instagram.com/breakingbaotx" target="_blank noopener noreferrer">
          ig <i className="icons icon-instagram" />
        </a>
        <a href="https://www.facebook.com/breakingbaotx" target="_blank noopener noreferrer">fb</a>
        <a href="https://www.twitter.com/breakingbaotx" target="_blank noopener noreferrer">tw</a>
      </div>
      <div className={s.madeByText}>
        made with &lt;3 in htx &copy; {new Date().getFullYear()} by{' '}
        <a href="http://isomorph.co" rel="noopener noreferrer" target="_blank">
          isomorph labs
        </a>.
      </div>
    </footer>
  )
}

export default Footer
