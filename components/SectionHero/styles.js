import styled, { css } from 'styled-components'
import media from "styled-media-query"
import { motion } from 'framer-motion'

export const Content = styled.div`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-rows: 1fr .5fr;
  height: 100%;
  padding: 5rem 2rem 0;

  ${media.greaterThan("medium")`
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    padding: 8rem 1.5rem 0;
  `}
`

export const LeftContent = styled(motion.div)`
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
  position: relative;

  ${media.greaterThan("medium")`
    background-size: contain;
    overflow: hidden;
  `}
`

export const Image = styled.img`
  position: absolute;
  bottom: -5rem;
  width: 8rem;

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