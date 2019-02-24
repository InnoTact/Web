import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'
import { CenterContainer, Button } from './index'

const Wrapper = styled.div`
  width: 100vw;
  height: 6rem;
  background-color: #ccc;
  display: flex;
  align-item: center;
  justify-content: center;
`

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  background-color: #ddd;
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
  color: '#647E95',
  fontSize: '1rem'
}

const LogoText = styled.h1`
  font-size: 1.3rem;
  display: inline-block;
  margin-left: 1.1rem;
  font-weight: normal;
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
        <Button primary>Contact</Button>
      </LinkContainer>
    </Container>
  </Wrapper>
)

export default Navbar
