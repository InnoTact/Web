import React, { Component } from "react"
import styled from "styled-components"
import Logo from "./Logo"
import NavItems from "./NavItems"
import { AppContext } from "./RootWrapper"

const navHeight = 5.4

const Wrapper = styled.div`
  width: 100%;
  height: ${navHeight + "rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 10;
  transition: initial;
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
      prevScrollpos: [0],
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

    const scrollOffset = 50

    let visible = true,
      newPrevScrollPos
    const currentScrollPos = window.pageYOffset

    if (currentScrollPos < scrollOffset) {
      visible = true
    } else if (prevScrollpos.length > scrollOffset) {
      visible =
        prevScrollpos[prevScrollpos.length - (scrollOffset - 1)] >
        currentScrollPos
    } else if (prevScrollpos.length > 10) {
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
    const { light } = this.props
    const currentScrollPos = prevScrollpos[prevScrollpos.length - 1]

    return (
      <Wrapper isVisible={visible} scrollPos={currentScrollPos}>
        <AppContext.Consumer>
          {value => {
            if (!value) {
              return null
            }

            return (
              <Container>
                <Logo light={light} />
                <NavItems dark={!light} />
              </Container>
            )
          }}
        </AppContext.Consumer>
      </Wrapper>
    )
  }
}

export default Navbar
