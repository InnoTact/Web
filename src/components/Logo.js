import React from 'react'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'
import { CenterContainer } from '.';
import { Link } from 'gatsby'
import colors from "../styles/colors"
import styles from '../styles/styles'

const LogoText = styled.h1`
  font-size: 1.3rem;
  white-space: nowrap;
  display: block;
  margin: 0;
  padding: 0;
  margin-left: 1.1rem;
  font-weight: 400;
  color: ${props => props.dark ? colors.dark : colors.white};
  
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    margin-left: 0.5rem;
    font-size: 1.15rem;
  }
`

export default ({...props}) => 
<CenterContainer>
    <Link to='/'>
      <FaCube style={{ fontSize: '2.5rem', color: 'black' }} />
    </Link>
    <Link to='/'>
      <LogoText {...props}>Augmented Solutions</LogoText>
    </Link>
</CenterContainer>