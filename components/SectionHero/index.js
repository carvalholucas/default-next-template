import Button from '../Button'
import { Container, Content, LeftContent, RightContent, Image } from './styles'

const SectionHero = () => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h5>Transforme o seu e-commerce</h5>
          <h1>Tecnologia e estratégia para impulsionar o seu negócio</h1>
          <p>Ajudamos você a vender mais e construir o elo que falta entre sua marca e o seu público, com nossa plataforma de e-mail marketing e um método próprio validado em mais de 2.000 lojas virtuais.</p>

          <Button size="big" href="#">Comece a vender mais agora</Button>
        </LeftContent>
        <RightContent>
          <Image src="images/hand2.png" />
        </RightContent>
      </Content>
    </Container>
  )
}

export default SectionHero