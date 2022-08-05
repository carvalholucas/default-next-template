import styled, { css } from 'styled-components'

const typographyModifiers = {
  h1: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  h2: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  h3: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  h4: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  h5: (theme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  h6: (theme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  subheading1: (theme, mb) => css`
    font-size: ${theme.font.sizes.medium};
    color: #6d7f82;
    line-height: ${theme.font.lineHeights.body};
    margin-bottom: ${mb ? mb : theme.spacings.xsmall};
  `,
  subheading2: (theme, mb) => css`
    font-size: ${theme.font.sizes.small};
    color: #6d7f82;
    line-height: ${theme.font.lineHeights.body};
    margin-bottom: ${mb ? mb : theme.spacings.xsmall};
  `,
  body1: (theme, mb) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.fontWeights.body};
    color: #465b6f;
    line-height: ${theme.font.lineHeights.body};
    margin-bottom: ${mb ? mb : theme.spacings.medium};
  `,
  body2: (theme, mb) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.fontWeights.body};
    color: #465b6f;
    line-height: ${theme.font.lineHeights.body};
    margin-bottom: ${mb ? mb : theme.spacings.medium};
  `,
}

export const Container = styled.p`
  ${({ theme, variant, color, mb }) => css`
    color: ${color ? color : '#2A2A2A'};
    display: block;
    font-weight: ${theme.font.fontWeights.heading};
    line-height: ${theme.font.lineHeights.body};
    margin-bottom: ${mb ? mb : '.5em'};

    ${variant && typographyModifiers[variant](theme, mb)}
  `}
`