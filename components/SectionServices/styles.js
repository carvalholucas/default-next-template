import styled from 'styled-components'
import media from "styled-media-query"

export const Content = styled.div`
  padding: 2rem;
`

export const AllServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  ${media.greaterThan("medium")`
    flex-wrap: nowrap;
    margin-top: 2rem;
  `}
`