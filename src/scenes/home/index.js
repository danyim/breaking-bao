import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout/Layout'
import Splash from '../../components/Splash'

const CenteredContainer = styled.div`
  height: 100%;
  display: grid;
  & > * {
    margin: 20px auto 0;
    width: 100%;
  }
`
const HomePage = () => (
  <Layout>
    <CenteredContainer>
      <div>
        <Splash />
      </div>
    </CenteredContainer>
  </Layout>
)

export default HomePage
