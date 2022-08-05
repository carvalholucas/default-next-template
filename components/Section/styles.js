import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: calc(100vh - 8rem);

    & > * {
      height: 100%;
    }
  `}
`