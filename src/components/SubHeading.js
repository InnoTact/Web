import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const SubHeading = styled.h3`
  color: ${props => props.dark ? colors.dark : colors.white};
  margin-bottom: 1.2rem;
  display: inline-block;
  font-size: 1.8rem;
  letter-spacing: 0;
  line-height: 1.5;
`

export default ({ text, dark, light }) => <SubHeading dark={dark} light={light}>{text}</SubHeading>
