import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import colors from '../styles/colors'
import Logo from './Logo';
import NavItems from './NavItems'

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

const Navbar = () => (
  <Wrapper>
    <Container>
      <Logo dark />
      <NavItems dark />
    </Container>
  </Wrapper>
)

export default Navbar
