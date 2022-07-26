import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: calc(100vh - 8rem);
    width: 100%;
  `}
`