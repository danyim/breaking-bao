import React from 'react'
import s from './Footer.css'

function Footer() {
  return (
    <footer className={s.transparent}>
      <div className={s.links}>
        @breakingbaotx
        <a href="">
          ig <i className="icons icon-instagram" />
        </a>
        <a href="">fb</a>
        <a href="">tw</a>
        <a href="">snap</a>
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
