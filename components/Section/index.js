import { SectionWrapper } from './styles'

const Section = ({ height, children }) => {
  return (
    <SectionWrapper height={height}>
      {children}
    </SectionWrapper>
  )
}

export default Section