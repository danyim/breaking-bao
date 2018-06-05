import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1100px auto;
  grid-template-rows: 75px auto 125px;
  grid-template-areas: 'header header header' '. main .' 'footer footer footer';

  & > header {
    grid-area: header;
    grid-column: 2;
    justify-self: end;
    display: flex;
    flex-flow: row nowrap;
    justify-content: right;
  }

  & > main {
    grid-area: main;
  }

  & > footer {
    grid-area: footer;
    grid-column: 2;
    justify-self: flex-end;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-rows: 75px auto 125px;
    grid-template-areas: 'header' 'main' 'footer';

    & > header,
    & > footer {
      grid-column: 1;
    }
  }
`

const Main = styled.main`
  @media screen and (max-width: 1024px) {
    padding: 0;
    margin: 0 0.5rem;
  }
`

class Layout extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className } = this.props
    return (
      <Container>
        <Header />
        <Main>
          <Content {...this.props} className={className} />
        </Main>
        <Footer />
      </Container>
    )
  }
}

export default Layout
