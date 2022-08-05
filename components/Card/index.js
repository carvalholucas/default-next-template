import {
  Container,
  Content
} from './styles'

const Card = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Card