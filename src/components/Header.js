import React from 'react'
import styled from 'styled-components'
import styles from '../styles/styles'
import PropTypes from 'prop-types';
import colors from '../styles/colors';

const StyledHeader = styled.h2`
  color: ${props => props.dark ? colors.dark : colors.white};
  margin-bottom: 0.8rem;
  display: inline-block;
  margin: 0 auto 30px;
  font-size: 2.6rem;
  letter-spacing: 0;
  text-transform: none;
  line-height: 1.5;
  text-align: center;
  max-width: 1080px;
  white-space: nowrap;

  @media (max-width: ${styles.breakpoints.sm + "px"}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${styles.breakpoints.lg + "px"}) {
    white-space: normal;
  }
`

const Header = ({ text, dark, h1, styles = {}, ...props }) => <StyledHeader as={h1 ? "h1" : "h2"} dark={dark} style={{ ...styles }} {...props} >{text}</StyledHeader>

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header
