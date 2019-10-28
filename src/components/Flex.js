import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  width: 100%;
  ${({ column }) => (column ? 'flex-direction: column;' : '')}
  ${({ row }) => (row ? 'flex-direction: row;' : '')}
  ${({ justifyCenter }) => (justifyCenter ? 'justify-content: center;' : '')}
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
`

export default Flex
