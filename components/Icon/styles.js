import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: #fbd6ec;
    border-radius: 1.5rem;
    color: ${theme.colors.primary};
    display: flex;
    height: 5rem;
    justify-content: center;
    margin-bottom: ${theme.spacings.xsmall};
    width: 5rem;
  `}
`