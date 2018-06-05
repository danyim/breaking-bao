import React, { Component } from 'react'
import styled from 'styled-components'

import Navigation from './Navigation'

const Container = styled.header`
& .row {
  padding: 40px;
}

& .title {
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
  & .header {
    display: flex;
  }

  & .row {
    padding: 0 16px;
  }
}

`
class Header extends Component {
  render() {
    return (
      <Container>
        <Navigation />
      </Container>
    )
  }
}

export default Header
