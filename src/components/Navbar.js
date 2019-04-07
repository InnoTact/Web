import React, { Component } from "react"
import styled from "styled-components"
import Logo from "./Logo"
import NavItems from "./NavItems"
import colors from "../styles/colors"

const navHeight = 5.4

const Wrapper = styled.div`
  width: 100%;
  height: ${navHeight + "rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${({ isVisible }) => (isVisible ? 0 : `-${navHeight}rem`)};
  left: 0;
  right: 0;
  background-color: ${({ scrollPos }) => scrollPos < 100 ? "transparent" : colors.primary};
  z-index: 10;
  transition: all 0.6s;
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
  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    }
  }

  componentDidMount() {
    this.setState({ ...this.state, prevScrollpos: window.pageYOffset })
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  render() {
    const { visible, prevScrollpos } = this.state

    return (
      <Wrapper isVisible={visible} scrollPos={prevScrollpos}>
        <Container>
          <Logo light />
          <NavItems dark />
        </Container>
      </Wrapper>
    )
  }
}

export default Navbar
