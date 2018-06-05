import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'

const Container = styled(Layout)`
  & .video {
    width: 80%;
    height: 400px;
  }

  @media screen and (max-width: 1024px) {
    & .video {
      width: 100%;
    }
  }
`

const PressPage = () => (
  <Container title="Press">
    <iframe
      className="video"
      src="https://www.youtube.com/embed/y8N1hNdPW-Q"
      frameBorder="0"
      allow="autoPlay; encrypted-media"
      allowFullScreen
      title="Great Day Houston"
    />
  </Container>
)

export default PressPage
