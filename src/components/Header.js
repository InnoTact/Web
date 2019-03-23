import React from 'react'
import styled from 'styled-components'
import styles from '../styles/styles'

const StyledHeader = styled.h1`
  color: white;
  margin-bottom: 1.2rem;
  display: inline-block;
  margin: 0 auto 30px;
  font-size: 2.6rem;
  letter-spacing: 0;
  text-transform: none;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  max-width: 1080px;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 1.8rem;
  }
`

const Header = ({ text, styles = {} }) => <StyledHeader style={{ ...styles }}>{text}</StyledHeader>

export default Header
