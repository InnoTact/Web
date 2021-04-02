import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import colors from "../styles/colors"
import HamburgerMenu from "react-hamburger-menu"
import { AppContext } from "./RootWrapper"
import LocalizedStrings from "react-localization"
import translation from "../translations/pages"

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  ${({ open }) =>
    open &&
    css`
      position: fixed;
      top: -40px;
      left: 0;
      right: 0;
      bottom: -40px;
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
  opacity: 1;
  transition: all 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out 0.1s, opacity 0.2s ease-in-out 0.1s,
    color 0.2s ease-in-out;

  ${({ open }) =>
    open &&
    css`
      margin-top: 6rem;
      margin-left: 4rem;
      font-size: 3rem;
      opacity: 1;
      transform: translate(-16px);
    `}
`

const NavLink = styled.div`
  text-decoration: none;
  font-size: 1rem;
  color: ${({ dark }) => (dark ? colors.darkgrey : colors.white)};

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
  top: ${({ isOpen }) => (isOpen ? "4.65rem" : "2.2rem")};
  right: 2.2rem;
`

class LinkData {
  constructor(text, url) {
    this.text = text
    this.url = url
  }
}

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
    const darkLinkColor = colors.dark
    const linkColor = dark ? darkLinkColor : colors.lightgrey
    const activeLinkColor = dark ? colors.mediumGreyLighten : colors.white
    const strings = new LocalizedStrings(translation)
    const links = [
      new LinkData(strings.home, "/"),
      new LinkData(strings.solutions, "/lösningar"),
      new LinkData(strings.about, "/om-oss/"),
      new LinkData(strings.contact, "/kontakt"),
      new LinkData(strings.home, "/"),
    ]
    const navItems = links.map(l => {
      return (
        <NavItem open={open}>
          <Link
            style={{ color: linkColor }}
            activeStyle={{ color: activeLinkColor, fontWeight: 600 }}
            to={l.url}
          >
            <NavLink style={{ color: open ? darkLinkColor : linkColor }} open={open} {...props}>
              {l.text}
            </NavLink>
          </Link>
        </NavItem>
      )
    })

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
                  <HamburgerContainer isOpen={open}>
                    <HamburgerMenu
                      isOpen={open}
                      width={30}
                      height={18}
                      strokeWidth={2}
                      rotate={0}
                      color={open ? colors.primary : (dark ? colors.dark : colors.white)}
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
