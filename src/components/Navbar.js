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
  background-color: ${({ scrollPos }) => scrollPos < 150 ? "transparent" : colors.primary};
  z-index: 10;
  transition: all 0.4s;
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
      prevScrollpos: [],
      visible: true,
    }
  }


  componentDidMount() {
    const { prevScrollpos } = this.state
    let newPrevScrollPos = prevScrollpos.slice()
    newPrevScrollPos.push(window.pageYOffset)
    this.setState({ ...this.state, prevScrollpos: newPrevScrollPos })
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state

    const scrollOffset = 30
  
    let visible, newPrevScrollPos
    const currentScrollPos = window.pageYOffset

    if (prevScrollpos.length > scrollOffset) {
      visible = prevScrollpos[prevScrollpos.length - (scrollOffset - 1)] > currentScrollPos
    } else {
      visible = false
    }
    
    newPrevScrollPos = prevScrollpos.slice()
    newPrevScrollPos.push(currentScrollPos)
    this.setState({
      prevScrollpos: newPrevScrollPos,
      visible,
    })
  }

  render() {
    const { visible, prevScrollpos } = this.state
    const currentScrollPos = prevScrollpos[prevScrollpos.length - 1]

    return (
      <Wrapper isVisible={visible} scrollPos={currentScrollPos}>
        <Container>
          <Logo light />  
          <NavItems dark />
        </Container>
      </Wrapper>
    )
  }
}

export default Navbar
