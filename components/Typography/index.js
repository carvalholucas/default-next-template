import { Container } from './styles.js'

const Typography = ({ variant, color, children, ...props }) => {
  return (
    <Container
      as={variant}
      variant={variant}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Typography