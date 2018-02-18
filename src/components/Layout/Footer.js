import React from 'react'
import s from './Footer.css'

function Footer() {
  return (
    <footer className={s.transparent}>
      <div className={s.logo}>
        made with &lt;3 in htx &copy; {new Date().getFullYear()} by{' '}
        <a href="http://isomorph.co" rel="noopener noreferrer" target="_blank">
          isomorph labs
        </a>.
      </div>
    </footer>
  )
}

export default Footer
