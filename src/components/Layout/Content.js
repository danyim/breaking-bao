import React from 'react'
import styled from 'styled-components'

import PageTitle from '../PageTitle'

const Container = styled.div``

const Content = props => (
  <Container className={props.className}>
    {props.title && <PageTitle>{props.title}</PageTitle>}
    {props.children}
  </Container>
)

export default Content
