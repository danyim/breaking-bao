import styled, { keyframes } from 'styled-components'

export const growKeyframe = (fromValue, toValue) => keyframes`
 from {
    width: ${fromValue || '10%'};
    opacity: 1.1;
  }

  to {
    width: ${toValue || '60%'};
    opacity: 0.75;
  }
`

const PageTitle = styled.h3`
  font-family: 'Dosis', sans-serif;
  font-size: 2.1rem;
  font-weight: 400;
  text-transform: uppercase;

  &::after {
    display: block;
    position: absolute;
    margin-top: 5px;
    width: 60%;
    height: 5px;
    background-color: #000;
    opacity: 0.75;
    content: '';
    animation: 1.25s ${growKeyframe()} ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 0.5rem;

    &::after {
      width: 100%;
      animation: 1.25s ${growKeyframe(null, '100%')} ease-in-out;
    }
  }
`

export default PageTitle
