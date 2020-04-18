import React from 'react'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'
import CenterContainer from '../components/CenterContainer'
import { Link } from 'gatsby'
import Img from "gatsby-image"
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

const LogoStyle = {
  width: 120,
  height: 60,
  margin: 0
}

export default ({ logo }) => 
<CenterContainer>
    <Link to='/'>
      {logo && <Img style={LogoStyle} fixed={logo} />}
    </Link>
</CenterContainer>