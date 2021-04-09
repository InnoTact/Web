import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import styles from '../styles/styles'
import PropTypes from 'prop-types';

const SubHeader = styled.p`
  color: ${props => props.dark ? colors.dark : colors.white};
  display: inline-block;
  margin-bottom: 1.2rem;
  margin: 0 auto 30px;
  font-size: 1.3rem;
  letter-spacing: 0;
  text-transform: none;
  line-height: 1.8;
  text-align: center;
  max-width: 1080px;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 1rem;
  }
`

SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({ children, ...props }) => <SubHeader {...props}>{children}</SubHeader>
