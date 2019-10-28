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
    <div>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/y8N1hNdPW-Q"
        frameBorder="0"
        allow="autoPlay; encrypted-media"
        allowFullScreen
        title="Great Day Houston"
      />
    </div>
    <div>
      <a
        href="http://houston.culturemap.com/news/restaurants-bars/08-21-19-politan-row-rice-village-food-hall-vendor-announcement-breaking-bao-cochinita-co-susu-kopi-boba/"
        target="_blank"
      >
        <p>Tacos, bao, and Indonesian ice cream are on deck for Rice Village's new food hall</p>
        <img
          src="http://api.breakingbao.com/wp-content/uploads/2019/10/cmap.svg_-e1572293172766.png"
          width="300"
        />
      </a>
    </div>

    <div>
      <a
        href="https://houston.eater.com/2019/8/21/20826710/politan-row-breaking-bao-cochinita-and-co-bar-politan-susu-kopi-and-boba-opening"
        target="_blank"
      >
        <img
          src="http://api.breakingbao.com/wp-content/uploads/2019/10/eater.svg_-e1572293270643.png"
          width="250"
        />
      </a>
    </div>
  </Container>
)

export default PressPage
