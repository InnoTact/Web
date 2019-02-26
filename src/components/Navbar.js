import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'
import { CenterContainer } from './index'
import Button from './Button'
import colors from '../styles/colors'

const Wrapper = styled.div`
  width: 100vw;
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 10;
`

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const NavItem = styled.div`
  margin-left: 2.3rem;
`

const NavItemStyle = {
  textDecoration: 'none',
  color: colors.dark,
  fontSize: '1rem'
}

const LogoText = styled.h1`
  font-size: 1.3rem;
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-left: 1.1rem;
  font-weight: 400;
  color: colors.dark;
`

const Navbar = () => (
  <Wrapper>
    <Container>
      <CenterContainer>
        <FaCube style={{ fontSize: '2.5rem' }} />
        <LogoText>Augmented Solutions</LogoText>
      </CenterContainer>
      <LinkContainer>
        <NavItem>
          <Link style={NavItemStyle} to='/'>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link style={NavItemStyle} to='/about/'>
            About us
          </Link>
        </NavItem>
        <NavItem>
          <Link style={NavItemStyle} to='/contact/'>
            Contact us
          </Link>
        </NavItem>
        <NavItem>
          <Link style={NavItemStyle} to='/services/'>
            Services
          </Link>
        </NavItem>
      </LinkContainer>
    </Container>
  </Wrapper>
)

export default Navbar
