import Section from '../Section'
import Card from '../Card'
import Typography from '../Typography'
import Icon from '../Icon'

import {
  AllServices,
  Content
} from './styles'

const SectionServices = () => {
  return (
    <Section
      color="gray"
      height="flex"
    >
      <Content>
        <Typography variant="h2">O que nós fazemos para realizar seus sonhos</Typography>
        <AllServices>
          <Card>
            <Icon>:)</Icon>
            <Typography variant="h3">Projetos</Typography>
            <Typography variant="body1" mb={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.
            </Typography>
          </Card>

          <Card>
            <Icon>:)</Icon>
            <Typography variant="h3">Regularização</Typography>
            <Typography variant="body1" mb={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.
            </Typography>
          </Card>

          <Card>
            <Icon>:)</Icon>
            <Typography variant="h3">Reforma</Typography>
            <Typography variant="body1" mb={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.
            </Typography>
          </Card>

          <Card>
            <Icon>:)</Icon>
            <Typography variant="h3">Construção</Typography>
            <Typography variant="body1" mb={0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.
            </Typography>
          </Card>
        </AllServices>
      </Content>
    </Section>
  )
}

export default SectionServices