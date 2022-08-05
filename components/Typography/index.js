import { Container } from './styles.js'

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

const Typography = ({ variant, color, mb, children, ...props }) => {

  const Component = variant ? variantsMapping[variant] : "p";
  const marginBottom = mb?.toString().concat('px')

  return (
    <Container
      as={Component}
      color={color}
      variant={variant}
      mb={marginBottom}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Typography