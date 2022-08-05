import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  ${({ theme, height }) => css`
    background: ${theme.colors.white};
    min-height: ${height === 'flex' ? 'auto' : 'calc(100vh - 8rem)'};

    & > * {
      height: 100%;
    }
  `}
`