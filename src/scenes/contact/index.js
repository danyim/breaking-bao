import React from 'react'
import styled from 'styled-components'
import Twitter from '../../components/Twitter'
import Layout from '../../components/Layout/Layout'

const Container = styled(Layout)`
  & .grid {
    display: flex;
    flex-flow: row nowrap;
  }

  & .grid__left {
  }

  & .grid__right {
  }

  @media screen and (max-width: 1024px) {
    & .grid {
      flex-flow: column nowrap;
    }
  }
`

const ContactPage = () => (
  <Container title="Contact">
    <div className="grid">
      <div className="grid__left">
        <p>We are a locally-owned business currently operating out of the Houston area.</p>
        <p>
          For general questions and inquiries, shoot an email to{' '}
          <a href="mailto:holler@breakingbao.com" target="_blank" rel="noopener noreferrer">
            holler@breakingbao.com
          </a>
          .
        </p>
        <p>
          For catering, email{' '}
          <a href="mailto:catering@breakingbao.com" target="_blank" rel="noopener noreferrer">
            catering@breakingbao.com
          </a>
          .
        </p>
        <p>
          If you're interested in joining the Breaking Bao team, reach out to us at{' '}
          <a href="mailto:hiring@breakingbao.com" target="_blank" rel="noopener noreferrer">
            hiring@breakingbao.com
          </a>
          .
        </p>
      </div>
      <div className="grid__right">
        <p>
          Follow us @breakingbaotx on{' '}
          <a href="https://twitter.com/breakingbaotx" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          ,{' '}
          <a href="https://instagram.com/breakingbaotx" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          ,{' '}
          <a href="https://facebook.com/breakingbaotx" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          , and Snapchat!
        </p>
        <Twitter user="breakingbaotx" limit={3} chrome="noheader, nofooter" />
      </div>
    </div>
  </Container>
)

export default ContactPage
