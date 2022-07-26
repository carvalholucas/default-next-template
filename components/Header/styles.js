import styled, { css } from 'styled-components'
import media from "styled-media-query"

export const Main = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    display: flex;
    height: 8rem;
    position: sticky;
    top: 0;
    z-index: 1;
  `}
` 

export const MenuIconBtn = styled.div`
  align-items: center;
  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease-in-out;
  position: relative;

  .menu-btn__burger {
    width: 4rem;
    height: .4rem;
    background: #F231A5;
    border-radius: 5px;
    transition: all .5s ease-in-out;
  }

  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 4rem;
    height: .4rem;
    background: #F231A5;
    border-radius: 5px;
    transition: all .5s ease-in-out;
  }

  .menu-btn__burger::before {
    transform: translateY(-1rem);
  }
  .menu-btn__burger::after {
    transform: translateY(1rem);
  }

  /* ANIMATION */
  &.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  &.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  &.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  ${media.greaterThan("medium")`
    display: none;
  `}
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  width: 100%;
`

export const Nav = styled.nav`
  align-items: center;
  display: none;
  justify-content: flex-end;
  margin-left: 5rem;
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline;
    font-size: 1.4rem;
    margin-right: 4rem;
    
    a {
      cursor: pointer;
      transition: color .5s;

      &:hover {
        color: #f332a5;
      }
    }
  }

  ${media.greaterThan("medium")`
    display: flex;
  `}
`

export const MenuMobile = styled.div`
  background: #f8f3fc;
  bottom: 0;
  height: calc(100% - 8rem);
  padding: 3.2rem 2rem;
  position: fixed;
  transition: transform .3s;
  width: 100%;
  transform: translateY(calc(100%));
  z-index: 1;

  &.menu-mobile__open {
    transform: translateY(0);
  }

  ul {
    list-style-type: none;
    margin: 0 0 1.5rem 0;
    padding: 0;
  }

  li {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    
    a {
      display: block;
      font-weight: 500;
      padding: 1.6rem 0;
      text-align: center;
      transition: color .2s;

      &:hover {
        color: #460099;
      }
    }
  }
`