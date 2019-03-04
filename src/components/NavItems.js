import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../styles/colors"
import HamburgerMenu from "react-hamburger-menu"

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const NavItem = styled.div`
  margin-left: 2.3rem;
`

const NavLink = styled.div`
  text-decoration: none;
  font-size: 1rem;
  color: ${({ dark }) => (dark ? colors.mediumGrey : colors.white)};

  :hover {
    color: ${({ dark }) => (dark ? colors.mediumGreyLighten : colors.white)};
    transition: all ease-in-out 0.2s;
  }
`

class NavItems extends Component {
  state = {
    open: false,
  }

  render() {
    const { ...props } = this.props

    return (
      <LinkContainer {...props}>
        {
          /*
          <HamburgerMenu
            isOpen={this.state.open}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
          */
        }
        <NavItem>
          <Link to="/">
            <NavLink {...props}>Home</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/capabilities/">
            <NavLink {...props}>Capabilities</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about/">
            <NavLink {...props}>About us</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact/">
            <NavLink {...props}>Contact us</NavLink>
          </Link>
        </NavItem>
      </LinkContainer>
    )
  }
}

export default NavItems
