import React from 'react';
import Link from '../Link';
import Logo from '../Logo';
import s from './Navigation.css';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className={`mdl-navigation__link ${s.link}`} to="/">
          <Logo width="75px" height="75px" />
        </Link>
        <Link className={`mdl-navigation__link ${s.link}`} to="/menu">Menu</Link>
        <Link className={`mdl-navigation__link ${s.link}`} to="/location">Location</Link>
        <Link className={`mdl-navigation__link ${s.link}`} to="/contact">Contact</Link>
      </nav>
    );
  }

}

export default Navigation;
