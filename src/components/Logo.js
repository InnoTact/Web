import React from 'react'
import styled from 'styled-components'
import { FaCube } from 'react-icons/fa'
import { CenterContainer } from '.';
import colors from '../styles/colors'

const LogoText = styled.h1`
  font-size: 1.3rem;
  display: inline;
  margin: 0;
  padding: 0;
  margin-left: 1.1rem;
  font-weight: 400;
  color: ${props => props.dark ? colors.dark : colors.white};
`

export default ({...props}) => <CenterContainer>
<FaCube style={{ fontSize: '2.5rem' }} />
<LogoText {...props}>Augmented Solutions</LogoText>
</CenterContainer>