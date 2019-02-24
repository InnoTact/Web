import React from 'react'
import styled from 'styled-components'
import colors from './../styles/colors'

const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 0 40px;
  height: 56px;
  line-height: 42px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 500;
  background-color: transparent;
  color: ${props => (props.primary ? colors.primary : colors.white)};
  border: 1px solid ${props => (props.primary ? colors.primary : colors.white)};
  transition: all 0.3s ease 0s;
`

export default Button
