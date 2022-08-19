import {
  SectionWrapper,
  Container
} from './styles'

const Section = ({
  color,
  height,
  children
}) => {
  return (
    <SectionWrapper
      color={color}
      height={height}
    >
      <Container>
        {children}
      </Container>
    </SectionWrapper>
  )
}

export default Section