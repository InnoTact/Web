import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import colors from "../styles/colors"
import HamburgerMenu from "react-hamburger-menu"
import { AppContext } from "./RootWrapper"

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  ${({ open }) =>
    open &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      transition: all 0.4s ease-in-out;
      background-color: ${colors.white};
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 0;
    `}
`

const NavItem = styled.div`
  margin-left: 2.3rem;

  ${({ open }) =>
    open &&
    css`
      margin-top: 6rem;
      margin-left: 4rem;
      font-size: 3rem;
      opacity: 1;
      transform: translate(-16px);
      transition: all 0.2s ease-in-out;
      transition-delay: 0.1s 0.1s 0;
      transition: transform 0.2s ease-in-out 0.1s, opacity 0.2s ease-in-out 0.1s,
        color 0.2s ease-in-out;
    `}
`

const NavLink = styled.div`
  text-decoration: none;
  font-size: 1rem;

  :hover {
    color: ${({ dark }) => (dark ? colors.mediumGreyLighten : colors.primaryLowLighten)};
    transition: all ease-in-out 0.2s;
  }

  ${({ open }) =>
    open &&
    css`
      font-size: 1.7rem;
      font-weight: 600;
      color: ${colors.primary};
      :hover {
        color: ${colors.primary};
      }
    `}
`

const HamburgerContainer = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 2.2rem;
`

class NavItems extends Component {
  state = {
    open: false,
  }

  menuClicked = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { windowWidth, dark, ...props } = this.props
    const { open } = this.state
    const linkColor = dark ? colors.mediumGrey : colors.mediumGrey
    const activeLinkColor = dark ? colors.mediumGreyLighten : colors.white

    const navItems = (
      <Fragment>
        <NavItem open={open}>
          <Link style={{color: linkColor}} activeStyle={{color: activeLinkColor, fontWeight: 600}} to="/">
            <NavLink open={open} {...props}>
              Home
            </NavLink>
          </Link>
        </NavItem>
        <NavItem open={open}>
          <Link style={{color: linkColor}} activeStyle={{color: activeLinkColor, fontWeight: 600}} to="/solutions/">
            <NavLink open={open} {...props}>
              Solutions
            </NavLink>
          </Link>
        </NavItem>
        <NavItem open={open}>
          <Link style={{color: linkColor}} activeStyle={{color: activeLinkColor, fontWeight: 600}} to="/about/">
            <NavLink open={open} {...props}>
              About us
            </NavLink>
          </Link>
        </NavItem>
        <NavItem open={open}>
          <Link style={{color: linkColor}} activeStyle={{color: activeLinkColor, fontWeight: 600}} to="/contact/">
            <NavLink open={open} {...props}>
              Contact us
            </NavLink>
          </Link>
        </NavItem>
      </Fragment>
    )

    return (
      <LinkContainer open={open} {...props}>
        <AppContext.Consumer>
          {value => {
            let output = null
            if (!value) {
              return null
            }

              if (value.isMobile) {
                output = (
                  <Fragment>
                    <HamburgerContainer>
                      <HamburgerMenu
                        isOpen={open}
                        width={32}
                        height={18}
                        strokeWidth={1}
                        rotate={0}
                        color={open ? colors.primary : colors.white}
                        borderRadius={0}
                        animationDuration={0.5}
                        menuClicked={this.menuClicked}
                      />
                    </HamburgerContainer>
                    {open && navItems}
                  </Fragment>
                )
              } else {
                output = navItems
              }
            
            return output
          }}
        </AppContext.Consumer>
      </LinkContainer>
    )
  }
}

export default NavItems
