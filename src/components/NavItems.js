import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import colors from "../styles/colors"
import HamburgerMenu from "react-hamburger-menu"
import isMobile from "../util/screen";
import windowSize from 'react-window-size';

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
      padding-top: 3rem;
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
  color: ${({ dark }) => (dark ? colors.mediumGrey : colors.white)};

  :hover {
    color: ${({ dark }) => (dark ? colors.mediumGreyLighten : colors.white)};
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
    const { windowWidth, ...props } = this.props
    const { open } = this.state

    const navItems = (
      <Fragment>
        <NavItem open={open}>
          <Link to="/">
            <NavLink open={open} {...props}>
              Home
            </NavLink>
          </Link>
        </NavItem>
        <NavItem open={open}>
          <Link to="/capabilities/">
            <NavLink open={open} {...props}>
              Capabilities
            </NavLink>
          </Link>
        </NavItem>
        <NavItem open={open}>
          <Link to="/about/">
            <NavLink open={open} {...props}>
              About us
            </NavLink>
          </Link>
        </NavItem>
        <NavItem open={open}>
          <Link to="/contact/">
            <NavLink open={open} {...props}>
              Contact us
            </NavLink>
          </Link>
        </NavItem>
      </Fragment>
    )

    return (
      <LinkContainer open={open} {...props}>
              <Fragment>
                {isMobile(windowWidth) && (
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
                )}

                {isMobile(windowWidth) && open ? navItems : null}
                {!isMobile(windowWidth) ? navItems : null}
              </Fragment>
      </LinkContainer>
    )
  }
}

export default windowSize(NavItems)
