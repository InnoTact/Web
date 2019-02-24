import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const SubHeading = styled.h3`
  color: colors.dark;
  margin-bottom: 1.2rem;
  display: inline-block;
  font-size: 1.8rem;
  letter-spacing: 0;
  line-height: 1.5;
`

export default ({ text }) => <SubHeading>{text}</SubHeading>
