import styled, { css } from 'styled-components'
import media from "styled-media-query"

export const SectionWrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: calc(100vh - 8rem);

    & > * {
      height: 100%;
    }

    /* ${media.greaterThan("medium")`

    `} */
  `}
`