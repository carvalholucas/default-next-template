import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  ${({ theme, color, height }) => css`
    background: ${color ? theme.colors[color] : theme.colors.white};
    min-height: ${height === 'flex' ? 'auto' : 'calc(100vh - 8rem)'};
  `}
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
  width: 100%;
`