import { ButtonWrapper } from './styles'

const Button = ({
  children,
  color,
  disabled,
  size,
  variant,
  block,
  href,
  onClick
}) => {
  const tag = typeof href === 'string' ? 'a' : 'button'
  // const variant = [text, contained, outlined]
  // const size = [sm, md, lg]
  // const color ou type = [primary, secondary]

  return (
    <ButtonWrapper
      as={tag}
      disabled={disabled}
      href={href}
      color={color}
      size={size}
      variant={variant}
      block={block}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button