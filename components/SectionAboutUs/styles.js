import styled, { css } from 'styled-components'
import media from "styled-media-query"

export const Content = styled.div`
  padding: 5rem 2rem;
  width: 100%;

  ${media.greaterThan("medium")`
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    padding: 8rem 1.5rem;
  `}

  & > div {
    position: relative;
  }
`

export const Image = styled.div`
  display: none;

  ${media.greaterThan("medium")`
    background: #2A2A2A;
    background: linear-gradient(150deg,#FFF 0%,rgba(242,49,165,0.2) 100%);
    border-radius: 1.5rem;
    border: 1px solid #F5F5F5;
    display: block;
  `}
`

export const LinkCTA = styled.a`
  color: #F231A5;
  font-size: 1.6rem;
  position: relative;
  
  ${media.greaterThan("medium")`
    bottom: 0;
    position: absolute;
  `}
`