import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import colors from '../styles/colors'

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const NavItem = styled.div`
  margin-left: 2.3rem;
`

const NavItemStyleDark = {
  textDecoration: 'none',
  fontSize: '1rem',
  color: colors.mediumGrey
}

const NavItemStyleLight = {
    textDecoration: 'none',
    fontSize: '1rem',
    color: colors.white
  }

export default ({...props}) => 
<LinkContainer {...props}>
        <NavItem>
            <Link style={props.dark ? NavItemStyleDark : NavItemStyleLight} to='/'>
              Home
            </Link>
        </NavItem>
        <NavItem>
          <Link style={props.dark ? NavItemStyleDark : NavItemStyleLight} to='/capabilities/'>
            Capabilities
          </Link>
        </NavItem>
        <NavItem>
          <Link style={props.dark ? NavItemStyleDark : NavItemStyleLight} to='/about/'>
            About us
          </Link>
        </NavItem>
        <NavItem>
          <Link style={props.dark ? NavItemStyleDark : NavItemStyleLight} to='/contact/'>
            Contact us
          </Link>
        </NavItem>
</LinkContainer>