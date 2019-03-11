import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../styles/colors"
import Logo from "./Logo"
import NavItems from "./NavItems"
import windowSize from 'react-window-size';

const Wrapper = styled.div`
  width: 100%;
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: top 0.25s ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 10;
`

const Container = styled.div`
  width: 90%;
  max-width: 1244px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

class Navbar extends Component {
  render() {
    const { windowWidth } = this.props

    return (
      <Wrapper>
        <Container>
          <Logo light />
          <NavItems screenWidth={windowWidth} dark />
        </Container>
      </Wrapper>
    )
  }
}

export default windowSize(Navbar)
