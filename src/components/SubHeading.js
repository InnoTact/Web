import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import styles from '../styles/styles'
import PropTypes from 'prop-types';

const SubHeading = styled.h3`
  color: ${props => props.dark ? colors.dark : colors.white};
  margin-bottom: 1.2rem;
  display: inline-block;
  font-size: ${({small}) => small ? '1.45rem' : '1.8rem'};
  letter-spacing: 0;
  line-height: 1.5;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: ${({small}) => small ? '1.2rem' : '1.45rem'};
  }
`

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({ children, small, dark, light, className }) => <SubHeading className={className} small={small} dark={dark} light={light}>{children}</SubHeading>
