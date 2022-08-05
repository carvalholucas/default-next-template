import Section from '../Section'
import Typography from '../Typography'

import {
  Container,
  Content,
  Image,
  LinkCTA
} from './styles'

const SectionAboutUs = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Image />
          <div>
            <Typography variant="subheading2">Tecnologia que integra!</Typography>
            <Typography variant="h2">
              Integramos do recrutamento e seleção, até a folha de pagamento! Conheça a única tecnologia que automatiza 100% dos sistemas do seu RH e DP!
            </Typography>
            <Typography variant="body1">
              Somos uma HR Tech com foco em automatizar todos os processos do RH e DP. Nossa tecnologia proporciona saúde e qualidade de vida para seus colaboradores, pois aqui sua empresa conta com: Gestão Ocupacional Digital Integrada a nível nacional, Pré-admissão Digital e Segurança do Trabalho.
            </Typography>

            <Typography variant="body1">
              Somos uma HR Tech com foco em automatizar todos os processos do RH e DP. Nossa tecnologia proporciona saúde e qualidade de vida para seus colaboradores, pois aqui sua empresa conta com: Gestão Ocupacional Digital Integrada a nível nacional, Pré-admissão Digital e Segurança do Trabalho.
            </Typography>

            <LinkCTA>Conheça nossa história</LinkCTA>
          </div>
        </Content>
      </Container>
    </Section>
  )
}

export default SectionAboutUs