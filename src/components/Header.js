import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  font-size: 2.4rem;
  color: #dd4b39;
  margin-bottom: 1.2rem;
`

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>

export default Header
