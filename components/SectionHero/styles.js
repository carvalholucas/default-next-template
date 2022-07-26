import styled, { css } from 'styled-components'
import media from "styled-media-query"

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    background: linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(242,49,165,0.2) 100%);
  `}
`

export const Content = styled.div`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-rows: repeat(2, 1fr);
  height: calc(100vh - 8rem);
  max-width: 1280px;
  width: 100%;
  padding: 5rem 2rem 0;

  ${media.greaterThan("medium")`
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    margin: 0 auto;
    padding: 0;
  `}

  & > div {
    height: 100%;
  }

  h5 {
    color: #6d7f82;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 125%;
    margin-bottom: 1.2rem;

    ${media.greaterThan("medium")`
      font-size: 2rem;
    `}
  }

  h1 {
    color: #1a1c1e;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 150%;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;

    ${media.greaterThan("medium")`
      font-size: 4.2rem;
    `}
  }

  p {
    color: #465b6f;
    font-size: 1.6rem;
    line-height: 150%;
    margin-bottom: ${({ theme }) => theme.spacings.large};
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  

  ${media.greaterThan("medium")`
    align-items: flex-start;
    justify-content: center;
    text-align: initial;
  `}
`

export const RightContent = styled.div`
  align-items: flex-end;
  background: url('images/dash.svg') no-repeat center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  overflow: hidden;

  ${media.greaterThan("medium")`
    background: url('images/dash.svg') no-repeat center center;
    background-size: contain;
    overflow: hidden;
    position: relative;
  `}
`

export const Image = styled.img`
  transform: translateY(2rem);
  width: 7rem;

  ${media.greaterThan("medium")`

    width: auto;
  `}
`