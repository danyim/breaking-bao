import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'
import Flex from '../../components/Flex'

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

const FlexPress = styled(Flex)`
  & > div:first-child {
    flex-basis: 350px;
  }

  & > div {
    flex: 1 1 auto;
  }
`

const PressPage = () => (
  <Container title="Press">
    <FlexPress>
      <div>
        <a
          href="http://houston.culturemap.com/news/restaurants-bars/08-21-19-politan-row-rice-village-food-hall-vendor-announcement-breaking-bao-cochinita-co-susu-kopi-boba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="http://api.breakingbao.com/wp-content/uploads/2019/10/cmap.svg_-e1572293172766.png"
            alt="Culture Map Houston"
            width="275"
          />
        </a>
      </div>
      <div>
        <h2>Tacos, bao, and Indonesian ice cream are on deck for Rice Village's new food hall</h2>
      </div>
    </FlexPress>

    <FlexPress>
      <div>
        <a
          href="https://houston.eater.com/2019/8/21/20826710/politan-row-breaking-bao-cochinita-and-co-bar-politan-susu-kopi-and-boba-opening"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="http://api.breakingbao.com/wp-content/uploads/2019/10/eater.svg_-e1572293270643.png"
            alt="Eater Houston"
            width="200"
          />
        </a>
      </div>
      <div>
        <h2>
          Here’s More Details On What’s Opening Inside Rice Village’s Much-Anticipated Food Hall
        </h2>
      </div>
    </FlexPress>

    <FlexPress justifyCenter margin="25px 0 0">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/y8N1hNdPW-Q"
        frameBorder="0"
        allow="autoPlay; encrypted-media"
        allowFullScreen
        title="Great Day Houston"
      />
    </FlexPress>
  </Container>
)

export default PressPage
