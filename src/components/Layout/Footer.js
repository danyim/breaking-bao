import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  text-align: right;

  & .social-links {
    margin: 1rem 0;

    color: #ccc;
    & > a {
      color: #ccc;
      margin: 0 0.5rem;
      text-decoration: none;
    }
  }

  & .madeBy {
    font-size: 0.9rem;
    color: #eee;

    & > a {
      color: #eee;
    }
  }
`

const Footer = () => (
  <Container>
    <div className="social-links">
      <a
        href="https://www.instagram.com/breakingbaotx"
        target="_blank noopener noreferrer"
      >
        <i className="icons icon-instagram" />
      </a>
      <a
        href="https://www.facebook.com/breakingbaotx"
        target="_blank noopener noreferrer"
      >
        <i className="icons icon-facebook" />
      </a>
      <a
        href="https://www.twitter.com/breakingbaotx"
        target="_blank noopener noreferrer"
      >
        <i className="icons icon-twitter" />
      </a>
    </div>
    <div className="madeBy">
      made with &lt;3 in htx &copy; {new Date().getFullYear()} by{' '}
      <a href="http://isomorph.co" rel="noopener noreferrer" target="_blank">
        isomorph labs
      </a>.
    </div>
  </Container>
)

export default Footer
