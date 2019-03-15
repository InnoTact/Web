import React, {Fragment} from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import styles from '../styles/styles'

const SubHeader = styled.h2`
  color: ${props => props.dark ? colors.dark : colors.white};
  display: inline-block;
  margin-bottom: 1.2rem;
  margin: 0 auto 30px;
  font-size: 1.2rem;
  letter-spacing: 0;
  text-transform: none;
  line-height: 1.8;
  text-align: center;
  max-width: 1080px;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 1.05rem;
  }
`

export default ({ text, ...props }) => <SubHeader {...props}>{text}</SubHeader>
