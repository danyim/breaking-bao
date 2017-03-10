import React from 'react';
import s from './Footer.css';

function Footer() {
  return (
    <footer className={`mdl-mini-footer ${s.transparent}`}>
      <div className="mdl-mini-footer__right-section">
        <div className={`mdl-logo ${s.logo}`}>© breaking bao htx</div>
      </div>
    </footer>
  );
}

export default Footer;
