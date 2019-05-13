import React from 'react'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'
import CenterContainer from '../components/CenterContainer'
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
  letter-spacing: 0.1;
  color: ${props => props.dark ? colors.dark : colors.white};
  
  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    margin-left: 0.4rem;
    font-size: 0.9rem;
  }
`

export default ({...props}) => 
<CenterContainer>
    <Link style={{width: '2.3rem', height: '2.3rem'}} to='/'>
      <FaCube style={{ fontSize: '2.3rem', color: colors.white }} />
    </Link>
    <Link to='/'>
      <LogoText {...props}>InnoTact</LogoText>
    </Link>
</CenterContainer>