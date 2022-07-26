import styled, { css } from 'styled-components'

const buttonModifiers = {
  sm: (theme) => css`
    font-size: ${theme.font.sizes.xxsmall};
    padding: 1.2rem 2.4rem;
  `,
  md: (theme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 1.4rem 2.8rem;
  `,
  lg: (theme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 1.6rem 3rem;
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 2rem 5rem;
`,
}

export const ButtonWrapper = styled.button`
  ${({ theme, size, block }) => css`
    background: ${theme.colors.primary};
    border: none;
    border-radius: .7rem;
    color: ${theme.colors.white};
    cursor: pointer;
    display: inline-block;
    font-weight: 500;
    min-width: 10rem;
    text-align: center;
    transition: background-color .4s;

    &:hover {
      background: ${theme.colors.primaryHover};
    }

    &:focus {
      box-shadow: 0 0 0 4px ${theme.colors.primaryFocus};
      outline: none;
    }

    &:disabled {
      color: #d2d5db;
      background: #6c7589;
      cursor: not-allowed;
    }

    ${size && buttonModifiers[size](theme)};
    ${block && css`
      margin-top: 1.5rem;
      width: 100%;
    `}
  `}
`