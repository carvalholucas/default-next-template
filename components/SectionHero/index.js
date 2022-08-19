import Section from '../Section'
import Typography from '../Typography'
import Button from '../Button'

import {
  Content,
  LeftContent,
  RightContent,
  Image,
  ScrollDown
} from './styles'

const SectionHero = () => {
  return (
    <Section color="primaryGradient">
        <Content>
          <LeftContent
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <Typography variant="subheading1">
              Transforme o seu e-commerce
            </Typography>
            <Typography variant="h1">
              Tecnologia e estratégia para impulsionar o seu negócio
            </Typography>
            <Typography variant="body1">
              Ajudamos você a vender mais e construir o elo que falta entre sua marca e o seu público, com nossa plataforma de e-mail marketing e um método próprio validado em mais de 2.000 lojas virtuais.
            </Typography>

            <Button size="big" href="#">Comece a vender mais agora</Button>

            <ScrollDown />
          </LeftContent>
          <RightContent>
            <Image src="images/hand2.png" alt="Image of hand"/>
          </RightContent>
        </Content>
    </Section>
  )
}

export default SectionHero