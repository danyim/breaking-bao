import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout/Layout'
import Splash from '../../components/Splash'

const CenteredContainer = styled.div`
  height: 100%;
  display: grid;
  & > * {
    margin: auto;
    width: 100%;
  }
`
const HomePage = () => (
  <Layout>
    <CenteredContainer>
      <Splash width={900} height={375} />
    </CenteredContainer>
  </Layout>
)

export default HomePage
