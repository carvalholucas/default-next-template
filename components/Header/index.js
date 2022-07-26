import { useState } from 'react'

import Image from 'next/image'

import Button from '../Button'
import { Container, Main, MenuIconBtn, MenuMobile, Nav } from './styles'

const Header = () => {
  const [MenuIsMobile, setMenuIsMobile] = useState(false)

  return (
    <>
      <Main>
        <Container>
          <Image
            src="/images/logo2.svg"
            alt="Logo"
            width={180}
            height={50}
          />

          <Nav>
            <ul>
              <li><a>Quem somos</a></li>
              <li><a>Planos</a></li>
              <li><a>Cases</a></li>
              <li><a>Seja nosso parceiro</a></li>
            </ul>

            <Button size="sm" href="#">Fale conosco</Button>
          </Nav>

          <MenuIconBtn
            onClick={() => setMenuIsMobile(!MenuIsMobile)}
            className={`menu-btn ${MenuIsMobile ? 'open' : ''}`}
          >
            <div className='menu-btn__burger'></div>
          </MenuIconBtn>
        </Container>
      </Main>

      <MenuMobile className={`${MenuIsMobile ? 'menu-mobile__open' : ''}`}>
        <ul>
          <li><a>Quem somos</a></li>
          <li><a>Planos</a></li>
          <li><a>Cases</a></li>
          <li><a>Seja nosso parceiro</a></li>
        </ul>

        <Button
          size="lg"
          href="#"
          block
        >Fale conosco</Button>
      </MenuMobile>
    </>
  )
}

export default Header