import styled from 'styled-components'

export const Grid = styled.main`
  background: #F5F5F5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  min-height: 100vh;
`

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
`