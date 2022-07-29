import styled, { css } from 'styled-components'
import media from "styled-media-query"

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    background: linear-gradient(150deg, #FFF 0%, rgba(242,49,165,0.2) 100%);
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
    padding: ${({ theme }) => theme.spacings.xlarge} 0 0;
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
    text-align: initial;
  `}
`

export const RightContent = styled.div`
  align-items: flex-end;
  background: url('images/dash.svg') no-repeat top center;
  background-size: contain;
  display: flex;
  justify-content: center;
  overflow: hidden;

  ${media.greaterThan("medium")`
    background-size: contain;
    overflow: hidden;
    position: relative;
  `}
`

export const Image = styled.img`
  position: absolute;
  bottom: -2rem;
  width: 7rem;

  ${media.greaterThan("medium")`
    width: auto;
  `}
`

export const ScrollDown = styled.div`
  ${({ theme }) => css`
    border-radius: 1.5rem;
    border: 2px solid ${theme.colors.primary};
    display: flex;
    height: 4rem;
    justify-content: center;
    margin-top: ${theme.spacings.xxlarge};
    width: 2.5rem;

    &::after {
      content: '';
      animation: move_down 1s ease infinite alternate;
      background: ${theme.colors.primary};
      border-radius: 50%;
      height: 1.2rem;
      width: 1.2rem;
    }

    @keyframes move_down {
      0% { margin-top: 100% }
      100% { margin-top: .5rem; }
    }

    ${media.lessThan("medium")`
      display: none;
    `}
  `}
`